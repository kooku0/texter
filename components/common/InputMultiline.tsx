
import styled from '@emotion/native';

interface Props {
  maxLength: number;
  text: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

function InputMultiline({ maxLength, placeholder, text, onChangeText }: Props) {
  return (
    <StyledTextInput
      accessibilityLabel="Text input multiline field"
      accessibilityHint="Text input multiline field"
      multiline
      placeholderTextColor="#A8A8A8"
      value={text}
      onChangeText={onChangeText}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  );
}

export default InputMultiline;

const StyledTextInput = styled.TextInput`
  background: #F7F7F7;
  border-radius: 8px;
  padding: 24px 16px;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  flex: 1;
`;
