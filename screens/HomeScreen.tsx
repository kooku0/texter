
import { Text } from 'react-native';

import styled from '@emotion/native';

import Card from '../components/Card';

function HomeScreen() {
  const text = '우리를 불행에 빠뜨리는\n원인 중 하나는 우리 주위에\n늘 있는 것을 알아차리지\n못하는 데 있다.';

  return (
    <Container>
      <Text>card</Text>
      <Card text={text}/>
    </Container>
  );
}

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;
