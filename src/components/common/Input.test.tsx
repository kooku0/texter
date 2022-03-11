import { fireEvent, render } from '@testing-library/react-native';

import Input from './Input';

describe('Input', () => {
  const onChangeText = jest.fn();

  const renderInput = (text: string, placeholder: string) => render((
    <Input
      text={text}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  ));

  it('placeholder가 보여야 한다.', () => {
    const placeholder = 'placeholder';
    const { queryByPlaceholderText } = renderInput('', placeholder);

    expect(queryByPlaceholderText(placeholder)).not.toBeNull();
  });

  it('text가 보여야 한다.', () => {
    const text = 'text';
    const placeholder = 'placeholder';
    const { getByA11yLabel } = renderInput(text, placeholder);

    expect(getByA11yLabel('Text input field').props.value).toBe(text);
  });

  context('글자를 입력하면', () => {
    it('onChangeText가 호출되어야 한다.', () => {
      const text = 'text';
      const placeholder = 'placeholder';
      const { getByA11yLabel } = renderInput('', placeholder);

      const input = getByA11yLabel('Text input field');

      fireEvent.changeText(input, text);

      expect(onChangeText).toBeCalledWith(text);
    });
  });
});
