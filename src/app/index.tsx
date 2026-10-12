import { useCallback } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useFontChoice } from '@/components/fonts';
import { PhoneFrame } from '@/components/PhoneFrame';
import { packs } from '@/content/packs';
import { useScorebook } from '@/db/scorebook';
import { formatFraction } from '@/lib/order';
import { theme } from '@/theme';

export default function HomeScreen() {
  const fonts = useFontChoice();
  const insets = useSafeAreaInsets();
  const { best, reloadBest } = useScorebook();

  useFocusEffect(
    useCallback(() => {
      reloadBest().catch(() => undefined);
    }, [reloadBest]),
  );

  return (
    <PhoneFrame>
      <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 32 }}>
        <View style={[styles.mast, { paddingTop: insets.top + 18 }]}>
          <Text style={[styles.mark, { fontFamily: fonts.semibold }]}>ORD</Text>
          <Text style={[styles.title, { fontFamily: fonts.display }]}>Ordered</Text>
          <Text style={[styles.tag, { fontFamily: fonts.body }]}>Put the record back in order.</Text>
        </View>
        <View style={styles.copy}>
          <Text style={[styles.lead, { fontFamily: fonts.body }]}>
            Pick a timeline. The facts arrive shuffled. Drag them into the order they happened, then check your places.
          </Text>
          {packs.map((pack, index) => {
            const saved = best[pack.id];
            return (
              <Pressable
                key={pack.id}
                testID={`pack-${pack.id}`}
                accessibilityRole="button"
                onPress={() => router.push(`/play/${pack.id}`)}
                style={styles.card}
              >
                <Text style={[styles.index, { fontFamily: fonts.semibold }]}>{String(index + 1).padStart(2, '0')}</Text>
                <Text style={[styles.cardTitle, { fontFamily: fonts.display }]}>{pack.title}</Text>
                <Text style={[styles.summary, { fontFamily: fonts.body }]}>{pack.summary}</Text>
                <Text style={[styles.rounds, { fontFamily: fonts.medium }]}>
                  {pack.rounds.length === 1 ? '1 round' : `${pack.rounds.length} rounds`}
                </Text>
                <View style={styles.scoreRow}>
                  <Text style={[styles.scoreLabel, { fontFamily: fonts.semibold }]}>Best run</Text>
                  <Text style={[styles.scoreValue, { fontFamily: fonts.medium }]}>
                    {saved ? formatFraction(saved.correct, saved.total) : 'No finished run yet'}
                  </Text>
                </View>
              </Pressable>
            );
          })}
          <Text style={[styles.note, { fontFamily: fonts.body }]}>
            A best run is the highest share of correct places across a full pass of a timeline. Every round has to be
            checked. Trying a round again replaces that round’s latest check. Nothing leaves this device.
          </Text>
        </View>
      </ScrollView>
    </PhoneFrame>
  );
}

const styles = StyleSheet.create({
  mast: {
    backgroundColor: theme.grove,
    paddingHorizontal: 22,
    paddingBottom: 22,
  },
  mark: {
    color: theme.brassSoft,
    fontSize: 12,
    letterSpacing: 2,
  },
  title: {
    color: theme.card,
    fontSize: 42,
    lineHeight: 46,
    marginTop: 6,
  },
  tag: {
    color: '#d5e4dc',
    fontSize: 16,
    marginTop: 6,
  },
  copy: {
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  lead: {
    color: theme.ink,
    fontSize: 16,
    lineHeight: 23,
    marginBottom: 16,
  },
  card: {
    backgroundColor: theme.card,
    borderColor: theme.line,
    borderWidth: 1,
    borderTopWidth: 3,
    borderTopColor: theme.brass,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 12,
  },
  index: {
    color: theme.brass,
    fontSize: 12,
    letterSpacing: 1,
  },
  cardTitle: {
    color: theme.ink,
    fontSize: 24,
    lineHeight: 28,
    marginTop: 4,
  },
  summary: {
    color: theme.inkSoft,
    fontSize: 15,
    lineHeight: 21,
    marginTop: 6,
  },
  rounds: {
    color: theme.grove,
    fontSize: 13,
    marginTop: 8,
  },
  scoreRow: {
    borderTopColor: theme.line,
    borderTopWidth: 1,
    marginTop: 12,
    paddingTop: 10,
  },
  scoreLabel: {
    color: theme.ink,
    fontSize: 12,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  scoreValue: {
    color: theme.inkSoft,
    fontSize: 15,
    marginTop: 2,
  },
  note: {
    color: theme.inkSoft,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 6,
  },
});
