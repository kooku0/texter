
import styled from '@emotion/native';

import CardStack from '../components/CardStack';

function HomeScreen() {
  return (
    <Container>
      <CardStack />
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
