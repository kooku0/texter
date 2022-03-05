import { TouchableHighlight } from 'react-native';

import styled from '@emotion/native';

interface Props {
  title: string;
  color: string;
  backgroundColor: string;
  onPress: () => void;
}

function Button({ title, onPress, color, backgroundColor }: Props) {
  return (
    <TouchableHighlight
      accessibilityRole="button"
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Wrapper
        testID="button-view"
        backgroundColor={backgroundColor}
      >
        <StyledText color={color}>{title}</StyledText>
      </Wrapper>
    </TouchableHighlight>
  );
}

export default Button;

const Wrapper = styled(TouchableHighlight) <{ backgroundColor: string; }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 6px;
  padding: 10px;
  align-items: center;
`;

const StyledText = styled.Text<{ color: string; }>`
  color: ${({ color }) => color};
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
`;
