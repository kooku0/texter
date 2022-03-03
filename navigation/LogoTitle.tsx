

import styled from '@emotion/native';

function LogoTitle() {
  return (
    <Wrapper>
      <Logo source={require('../assets/images/texter.png')} />
    </Wrapper>
  );
}

export default LogoTitle;

const Logo = styled.Image`
  width: 110px;
  height: 20px;
`;

const Wrapper = styled.View`
  flex: 1;
  padding-left: 10px;
  justify-content: center;
`;
