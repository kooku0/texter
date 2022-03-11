import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';

import useFetchSentences from '../hooks/api/useFetchSentences';
import useRefreshOnFocus from '../hooks/useRefreshOnFocus';
import { styles } from '../styles/common';

import CardStackContainer from './CardStackContainer';

function CardContainer() {
  const { data, isLoading, refetch, isRefetching } = useFetchSentences();

  useRefreshOnFocus(refetch);

  if (!data || isLoading || isRefetching) {
    return (
      <View style={styles.container}>
        <Spinner visible={isLoading} size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CardStackContainer sentences={data} />
    </View>
  );
}

export default CardContainer;
