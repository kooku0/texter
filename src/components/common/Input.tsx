import { TextInput } from 'react-native';

import styled from '@emotion/native';

interface Props {
  text: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

function Input({ text, placeholder, onChangeText }: Props) {
  return (
    <StyledInput
      accessibilityLabel="Text input field"
      accessibilityHint="Text input field"
      textAlignVertical="center"
      editable
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#A8A8A8"
      value={text}
    />
  );
}

export default Input;

const StyledInput = styled(TextInput)`
  padding: 0 16px;
  height: 48px;
  font-weight: normal;
  font-size: 16px;
  background-color: #F6F6F6;
  border-radius: 8px;
  margin-bottom: 8px;
`;
