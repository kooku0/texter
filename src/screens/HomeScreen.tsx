import styled from '@emotion/native';

import CardContainer from '../container/CardContainer';

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
