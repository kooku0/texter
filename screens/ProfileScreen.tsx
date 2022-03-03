import { Text } from 'react-native';

import styled from '@emotion/native';


function ProfileScreen() {
  return (
    <Wrapper>
      <Text>프로필</Text>
    </Wrapper>
  );
}

export default ProfileScreen;

const Wrapper = styled.View`
  flex: 1;
`;
