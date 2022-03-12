import { fireEvent, render } from '@testing-library/react-native';

import React from 'react';

import { SentenceResponse } from '@app/api/sentence/model';

import CardStackContainer from './CardStackContainer';

import { Timestamp } from 'firebase/firestore';

jest.mock('@app/components/CardStack');

describe('CardStackContainer', () => {
  const swipeLeft = jest.fn();
  const swipeRight = jest.fn();

  jest.spyOn(React, 'useRef').mockImplementation(() => ({
    current: {
      swipeLeft,
      swipeRight,
    },
  }));

  const sentences: SentenceResponse[] = [
    {
      sentence: '문장',
      title: '제목',
      link: '링크',
      createdAt: Timestamp.now(),
    },
  ];

  const renderCardStackContainer = () => render((
    <CardStackContainer sentences={sentences} />
  ));

  context('prass 버튼을 누르면', () => {
    it('swipeLeft가 호출되어야 한다.', () => {
      const { getByTestId } = renderCardStackContainer();

      fireEvent.press(getByTestId('pass-button'));

      expect(swipeLeft).toBeCalled();
    });
  });

  context('store 버튼을 누르면', () => {
    it('swipeRight가 호출되어야 한다.', () => {
      const { getByTestId } = renderCardStackContainer();

      fireEvent.press(getByTestId('store-button'));

      expect(swipeRight).toBeCalled();
    });
  });
});
