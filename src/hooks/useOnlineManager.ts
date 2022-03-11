import { useEffect } from 'react';
import { onlineManager } from 'react-query';
import { Platform } from 'react-native';

import NetInfo from '@react-native-community/netinfo';

function useOnlineManager() {
  useEffect(() => {
    // React Query already supports on reconnect auto refetch in web browser
    if (Platform.OS !== 'web') {
      return NetInfo.addEventListener((state) => {
        onlineManager.setOnline(
          state.isConnected != null &&
            state.isConnected &&
            Boolean(state.isInternetReachable),
        );
      });
    }
  }, []);
}

export default useOnlineManager;
