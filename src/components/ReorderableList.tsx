import { useEffect, useMemo, useRef, type ReactNode } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { useFontChoice } from '@/components/fonts';
import { moveItem } from '@/lib/order';
import { theme } from '@/theme';

type Props<T extends { id: string }> = {
  items: T[];
  enabled: boolean;
  toneFor?: (item: T, index: number) => 'idle' | 'correct' | 'wrong';
  onReorder: (next: T[]) => void;
  renderItem: (item: T, index: number) => ReactNode;
};

export function ReorderableList<T extends { id: string }>({ items, enabled, toneFor, onReorder, renderItem }: Props<T>) {
  return (
    <View>
      {items.map((item, index) => (
        <ReorderRow
          key={item.id}
          index={index}
          count={items.length}
          enabled={enabled}
          tone={toneFor ? toneFor(item, index) : 'idle'}
          onMove={(from, to) => onReorder(moveItem(items, from, to))}
        >
          {renderItem(item, index)}
        </ReorderRow>
      ))}
    </View>
  );
}

function ReorderRow({
  index,
  count,
  enabled,
  tone,
  onMove,
  children,
}: {
  index: number;
  count: number;
  enabled: boolean;
  tone: 'idle' | 'correct' | 'wrong';
  onMove: (from: number, to: number) => void;
  children: ReactNode;
}) {
  const fonts = useFontChoice();
  const translateY = useSharedValue(0);
  const dragging = useSharedValue(false);
  const rowHeight = useSharedValue(96);
  const indexSV = useSharedValue(index);
  const countSV = useSharedValue(count);
  useEffect(() => {
    indexSV.value = index;
    countSV.value = count;
  }, [count, countSV, index, indexSV]);
  const onMoveRef = useRef(onMove);
  onMoveRef.current = onMove;

  const commit = useMemo(() => {
    return (from: number, to: number) => {
      onMoveRef.current(from, to);
    };
  }, []);

  const pan = useMemo(() => {
    return Gesture.Pan()
      .enabled(enabled)
      .activateAfterLongPress(220)
      .onStart(() => {
        dragging.value = true;
      })
      .onUpdate((event) => {
        translateY.value = event.translationY;
      })
      .onEnd((event) => {
        const step = Math.max(rowHeight.value, 1);
        const delta = Math.round(event.translationY / step);
        const from = indexSV.value;
        const to = Math.min(countSV.value - 1, Math.max(0, from + delta));
        dragging.value = false;
        if (to !== from) {
          translateY.value = 0;
          runOnJS(commit)(from, to);
        } else {
          translateY.value = withTiming(0, { duration: 160 });
        }
      })
      .onFinalize(() => {
        dragging.value = false;
      });
  }, [commit, countSV, dragging, enabled, indexSV, rowHeight, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }, { scale: dragging.value ? 1.015 : 1 }],
    zIndex: dragging.value ? 5 : 0,
  }));

  const borderColor = tone === 'correct' ? theme.correct : tone === 'wrong' ? theme.wrong : theme.line;
  const background = tone === 'correct' ? theme.correctBg : tone === 'wrong' ? theme.wrongBg : theme.card;

  return (
    <Animated.View
      style={[styles.row, animatedStyle, { borderColor, backgroundColor: background }]}
      onLayout={(event) => {
        rowHeight.value = event.nativeEvent.layout.height + 8;
      }}
    >
      <GestureDetector gesture={pan}>
        <View style={styles.dragTarget} accessibilityHint={enabled ? 'Hold and drag to reorder' : undefined}>
          <View style={styles.grip} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
            <View style={styles.gripLine} />
            <View style={styles.gripLine} />
            <View style={styles.gripLine} />
          </View>
          <Text style={[styles.index, { fontFamily: fonts.semibold }]}>{index + 1}</Text>
          <View style={styles.content}>{children}</View>
        </View>
      </GestureDetector>
      {enabled ? (
        <View style={styles.arrows}>
          <ArrowButton
            label="Move earlier"
            glyph="↑"
            disabled={index === 0}
            onPress={() => onMove(index, index - 1)}
          />
          <ArrowButton
            label="Move later"
            glyph="↓"
            disabled={index === count - 1}
            onPress={() => onMove(index, index + 1)}
          />
        </View>
      ) : null}
    </Animated.View>
  );
}

function ArrowButton({
  label,
  glyph,
  disabled,
  onPress,
}: {
  label: string;
  glyph: string;
  disabled: boolean;
  onPress: () => void;
}) {
  const fonts = useFontChoice();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      disabled={disabled}
      onPress={onPress}
      style={[styles.arrow, disabled ? styles.arrowDisabled : null]}
    >
      <Text style={[styles.arrowGlyph, { fontFamily: fonts.semibold }, disabled ? styles.arrowGlyphDisabled : null]}>
        {glyph}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
    borderWidth: 1,
    borderLeftWidth: 4,
    marginBottom: 8,
    minHeight: 76,
  },
  dragTarget: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    paddingLeft: 10,
    paddingRight: 8,
    ...(Platform.OS === 'web' ? { touchAction: 'none' as const, userSelect: 'none' as const } : null),
  },
  grip: {
    width: 14,
    paddingTop: 6,
    gap: 3,
  },
  gripLine: {
    height: 2,
    backgroundColor: theme.brassSoft,
  },
  index: {
    width: 22,
    color: theme.brass,
    fontSize: 13,
    marginTop: 1,
  },
  content: {
    flex: 1,
  },
  arrows: {
    justifyContent: 'center',
    paddingRight: 8,
    gap: 4,
  },
  arrow: {
    width: 36,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.line,
    backgroundColor: theme.paper,
  },
  arrowDisabled: {
    opacity: 0.35,
  },
  arrowGlyph: {
    color: theme.grove,
    fontSize: 16,
  },
  arrowGlyphDisabled: {
    color: theme.inkSoft,
  },
});
