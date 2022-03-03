import { Text } from 'react-native';

import styled from '@emotion/native';


function WriteScreen() {
  return (
    <Wrapper>
      <Text>글쓰기</Text>
    </Wrapper>
  );
}

export default WriteScreen;

const Wrapper = styled.View`
  flex: 1;
`;
