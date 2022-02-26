
import styled from '@emotion/native';

import EditScreenInfo from '../components/EditScreenInfo';

export default function TabOneScreen() {
  return (
    <Container>
      <Title>Tab One</Title>
      <Separator />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary200};
`;

const Title = styled.Text`
  font-size: 20;
  font-weight: bold;
`;

const Separator = styled.View`
  margin-vertical: 30;
  height: 1;
  width: 80%;
`;
