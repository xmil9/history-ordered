import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme } from '@/theme';
import { useFontChoice } from '@/components/fonts';

type Props = {
  kicker: string;
  title: string;
  body: string;
  detail?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function StatusView({ kicker, title, body, detail, actionLabel, onAction }: Props) {
  const fonts = useFontChoice();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.desk, { paddingTop: insets.top + 28, paddingBottom: insets.bottom + 28 }]}>
      <View style={styles.card}>
        <Text style={[styles.kicker, { fontFamily: fonts.semibold }]}>{kicker}</Text>
        <Text style={[styles.title, { fontFamily: fonts.display }]}>{title}</Text>
        <Text style={[styles.body, { fontFamily: fonts.body }]}>{body}</Text>
        {detail ? <Text style={[styles.detail, { fontFamily: fonts.medium }]}>{detail}</Text> : null}
        {actionLabel && onAction ? (
          <Pressable accessibilityRole="button" onPress={onAction} style={styles.button}>
            <Text style={[styles.buttonLabel, { fontFamily: fonts.semibold }]}>{actionLabel}</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  desk: {
    flex: 1,
    backgroundColor: theme.desk,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: theme.card,
    borderColor: theme.line,
    borderWidth: 1,
    paddingHorizontal: 22,
    paddingVertical: 24,
  },
  kicker: {
    color: theme.brass,
    fontSize: 12,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
  title: {
    color: theme.ink,
    fontSize: 32,
    lineHeight: 36,
    marginTop: 8,
  },
  body: {
    color: theme.inkSoft,
    fontSize: 16,
    lineHeight: 23,
    marginTop: 12,
  },
  detail: {
    color: theme.wrong,
    fontSize: 13,
    lineHeight: 18,
    marginTop: 12,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: theme.grove,
    marginTop: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  buttonLabel: {
    color: theme.card,
    fontSize: 15,
  },
});
