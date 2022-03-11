import { fireEvent, render } from '@testing-library/react-native';

import InputMultiline from './InputMultiline';

describe('InputMultiline', () => {
  const onChangeText = jest.fn();

  const renderInputMultiline = (text: string, placeholder: string) => render((
    <InputMultiline
      text={text}
      placeholder={placeholder}
      onChangeText={onChangeText}
      maxLength={200}
    />
  ));

  it('placeholder가 보여야 한다.', () => {
    const placeholder = 'placeholder';
    const { queryByPlaceholderText } = renderInputMultiline('', placeholder);

    expect(queryByPlaceholderText(placeholder)).not.toBeNull();
  });

  it('text가 보여야 한다.', () => {
    const text = 'text';
    const placeholder = 'placeholder';
    const { getByA11yLabel } = renderInputMultiline(text, placeholder);

    expect(getByA11yLabel('Text input multiline field').props.value).toBe(text);
  });

  context('글자를 입력하면', () => {
    it('onChangeText가 호출되어야 한다.', () => {
      const text = 'text';
      const placeholder = 'placeholder';
      const { getByA11yLabel } = renderInputMultiline('', placeholder);

      const input = getByA11yLabel('Text input multiline field');

      fireEvent.changeText(input, text);

      expect(onChangeText).toBeCalledWith(text);
    });
  });
});
