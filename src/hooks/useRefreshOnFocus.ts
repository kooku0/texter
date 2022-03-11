
import { useCallback, useRef } from 'react';

import { useFocusEffect } from '@react-navigation/native';

function useRefreshOnFocus(refetch: () => void) {
  const enabledRef = useRef(false);

  useFocusEffect(
    useCallback(() => {
      if (enabledRef.current) {
        refetch();
      } else {
        enabledRef.current = true;
      }
    }, [refetch]),
  );
}

export default useRefreshOnFocus;
