import { TouchableOpacity } from 'react-native';

import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../@types/navigation';

type HomeScreenProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

function HeaderRight() {
  const navigation = useNavigation<HomeScreenProps>();

  const handlePressWrite = () => navigation.navigate('Write');
  const handlePressProfile = () => navigation.navigate('Profile');

  return (
    <Wrapper>
      <TouchableOpacity
        testID="write-icon"
        accessibilityRole="button"
        onPress={handlePressWrite}
      >
        <IconImage source={require('../../assets/images/write.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        testID="profile-icon"
        accessibilityRole="button"
        onPress={handlePressProfile}
      >
        <IconImage source={require('../../assets/images/profile.png')} />
      </TouchableOpacity>
    </Wrapper>
  );
}

export default HeaderRight;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

const IconImage = styled.Image`
  width: 28px;
  height: 28px;
  margin: 0 5px;
`;
