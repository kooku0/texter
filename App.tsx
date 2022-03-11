import { focusManager, QueryClient, QueryClientProvider } from 'react-query';
import { AppStateStatus, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from '@emotion/react';
import { StatusBar } from 'expo-status-bar';

import useAppState from './src/hooks/useAppState';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import useOnlineManager from './src/hooks/useOnlineManager';
import Navigation from './src/navigation';
import colors from './src/styles/colors';

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useOnlineManager();
  useAppState(onAppStateChange);

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={colors[colorScheme]}>
          <Navigation />
          <StatusBar />
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
