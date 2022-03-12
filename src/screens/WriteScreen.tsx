
import { View } from 'react-native';

import WriteContainer from '@app/containers/WriteContainer';
import { styles } from '@app/styles/common';

function WriteScreen() {
  return (
    <View style={styles.container}>
      <WriteContainer />
    </View>
  );
}

export default WriteScreen;
