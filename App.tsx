import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from '@emotion/react';
import { StatusBar } from 'expo-status-bar';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import colors from './styles/colors';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={colors[colorScheme]}>
        <Navigation />
        <StatusBar />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
