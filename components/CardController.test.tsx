import { fireEvent, render } from '@testing-library/react-native';

import CardController from './CardController';

describe('CardController', () => {
  const handlePressPass = jest.fn();
  const handlePressStore = jest.fn();

  const renderCardController = () => render((
    <CardController
      onPressPass={handlePressPass}
      onPressStore={handlePressStore}
    />
  ));

  context('prass 버튼을 누르면', () => {
    it('handlePressPass가 호출되어야 한다.', () => {
      const { getByTestId } = renderCardController();

      fireEvent.press(getByTestId('pass-button'));

      expect(handlePressPass).toBeCalled();
    });
  });

  context('store 버튼을 누르면', () => {
    it('handlePressStore가 호출되어야 한다.', () => {
      const { getByTestId } = renderCardController();

      fireEvent.press(getByTestId('store-button'));

      expect(handlePressStore).toBeCalled();
    });
  });
});
