import { fireEvent, render } from '@testing-library/react-native';

import React from 'react';

import CardContainer from './CardContainer';

jest.mock('@app/components/CardStack');
jest.mock('@app/hooks/api/useFetchSentences');
jest.mock('@app/hooks/useRefreshOnFocus');

describe('CardContainer', () => {
  const swipeLeft = jest.fn();
  const swipeRight = jest.fn();

  jest.spyOn(React, 'useRef').mockImplementation(() => ({
    current: {
      swipeLeft,
      swipeRight,
    },
  }));

  const renderCardContainer = () => render((
    <CardContainer />
  ));

  context('prass 버튼을 누르면', () => {
    it('swipeLeft가 호출되어야 한다.', () => {
      const { getByTestId } = renderCardContainer();

      fireEvent.press(getByTestId('pass-button'));

      expect(swipeLeft).toBeCalled();
    });
  });

  context('store 버튼을 누르면', () => {
    it('swipeRight가 호출되어야 한다.', () => {
      const { getByTestId } = renderCardContainer();

      fireEvent.press(getByTestId('store-button'));

      expect(swipeRight).toBeCalled();
    });
  });
});