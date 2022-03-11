import { useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native';

type Listener = (state: AppStateStatus) => void;

function useAppState(onChange: Listener) {
  useEffect(() => {
    AppState.addEventListener('change', onChange);
    return () => {
      AppState.removeEventListener('change', onChange);
    };
  }, [onChange]);
}

export default useAppState;
