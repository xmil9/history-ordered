import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { FontProvider } from '@/components/fonts';
import { ScorebookProvider } from '@/db/scorebook';
import { theme } from '@/theme';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: theme.desk }}>
      <SafeAreaProvider>
        <FontProvider>
          <ScorebookProvider>
            <StatusBar style="light" />
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: theme.desk },
              }}
            />
          </ScorebookProvider>
        </FontProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
