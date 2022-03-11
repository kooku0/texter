import { fireEvent, render } from '@testing-library/react-native';

import Button from './Button';

describe('Button', () => {
  const onPress = jest.fn();

  const renderButton = (color: string, backgroundColor: string) => render((
    <Button
      title="button"
      color={color}
      backgroundColor={backgroundColor}
      onPress={onPress}
    />
  ));

  context('버튼을 누르면', () => {
    it('onPress가 호출되어야 한다.', () => {
      const { getByText } = renderButton('#fff', '#000');

      fireEvent.press(getByText('button'));

      expect(onPress).toBeCalled();
    });
  });

  it('글자색이 color여야 한다.', () => {
    const color = '#fff';
    const { getByText } = renderButton(color, '#000');

    expect(getByText('button')).toHaveStyle({
      color,
    });
  });

  it('배경색이 backgroundColor여야 한다.', () => {
    const backgroundColor = '#000';
    const { getByTestId } = renderButton('#fff', backgroundColor);

    expect(getByTestId('button-view')).toHaveStyle({
      backgroundColor,
    });
  });
});
