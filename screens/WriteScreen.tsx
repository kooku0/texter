
import { View } from 'react-native';

import WriteContainer from '../container/WriteContainer';
import { styles } from '../styles/common';

function WriteScreen() {
  return (
    <View style={styles.container}>
      <WriteContainer />
    </View>
  );
}

export default WriteScreen;
