import CardContainer from '@app/containers/CardContainer';

import styled from '@emotion/native';

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
