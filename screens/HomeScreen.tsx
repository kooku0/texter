import styled from '@emotion/native';

import CardContainer from '../components/CardContainer';

function HomeScreen() {
  return (
    <Wrapper>
      <CardContainer />
    </Wrapper>
  );
}

export default HomeScreen;

const Wrapper = styled.View`
  flex: 1;
`;
