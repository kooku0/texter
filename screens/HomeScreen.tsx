
import styled from '@emotion/native';

function HomeScreen() {
  return (
    <Container>
      <Title>Home</Title>
    </Container>
  );
}

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20;
  font-weight: bold;
`;
