import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { theme } from '@/theme';

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <View style={styles.desk}>
      <View style={styles.phone}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  desk: {
    flex: 1,
    backgroundColor: theme.desk,
    alignItems: 'center',
  },
  phone: {
    flex: 1,
    width: '100%',
    maxWidth: 440,
    backgroundColor: theme.paper,
  },
});
