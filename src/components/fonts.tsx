import { createContext, useContext, type ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Fraunces_700Bold } from '@expo-google-fonts/fraunces';
import { Outfit_400Regular, Outfit_500Medium, Outfit_600SemiBold } from '@expo-google-fonts/outfit';

import { bundledFonts, systemFonts, theme, type FontChoice } from '@/theme';

const FontContext = createContext<FontChoice>(systemFonts);

export function FontProvider({ children }: { children: ReactNode }) {
  const [loaded, error] = useFonts({
    Fraunces_700Bold,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
  });

  if (!loaded && !error) {
    return (
      <View style={styles.loading}>
        <Text style={styles.kicker}>ORDERED</Text>
        <Text style={styles.title}>Setting the type</Text>
        <Text style={styles.body}>Loading the text used on the cards.</Text>
      </View>
    );
  }

  return <FontContext.Provider value={error ? systemFonts : bundledFonts}>{children}</FontContext.Provider>;
}

export function useFontChoice(): FontChoice {
  return useContext(FontContext);
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: theme.paper,
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  kicker: {
    color: theme.brass,
    fontSize: 12,
    letterSpacing: 1.6,
    fontFamily: 'sans-serif',
  },
  title: {
    color: theme.ink,
    fontSize: 34,
    marginTop: 8,
    fontFamily: 'serif',
  },
  body: {
    color: theme.inkSoft,
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'sans-serif',
  },
});
