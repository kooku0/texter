import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';

import useFetchSentences from '@app/hooks/api/useFetchSentences';
import useRefetchOnFocus from '@app/hooks/useRefetchOnFocus';
import { styles } from '@app/styles/common';

import CardStackContainer from './CardStackContainer';

function CardContainer() {
  const { data, isLoading, refetch, isRefetching } = useFetchSentences();

  useRefetchOnFocus(refetch);

  if (!data || isLoading || isRefetching) {
    return (
      <View style={styles.container} testID="spinner">
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
