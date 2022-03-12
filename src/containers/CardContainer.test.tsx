import { render } from '@testing-library/react-native';

import React from 'react';

import { sentenceResponse as FIXTURE_SENTENCES } from '@app/fixtures/setence';
import useFetchSentences from '@app/hooks/api/useFetchSentences';

import CardContainer from './CardContainer';

jest.mock('@app/components/CardStack');
jest.mock('@app/hooks/api/useFetchSentences');
jest.mock('@app/hooks/useRefetchOnFocus');

describe('CardContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useFetchSentences as jest.Mock).mockImplementation(() => ({
      data: given.data,
      isLoading: given.isLoading,
      referch: given.refetch,
      isRefetching: given.isRefetching,
    }));
  });

  const renderCardContainer = () => render((
    <CardContainer />
  ));

  context('sentences fetching 중이라면', () => {
    given('isLoading', () => true);

    it('spinner가 보여야 한다.', () => {
      const { queryByTestId } = renderCardContainer();

      expect(queryByTestId('spinner')).not.toBeNull();
    });
  });

  context('sentences refetching 중이라면', () => {
    given('isRefetching', () => true);

    it('spinner가 보여야 한다.', () => {
      const { queryByTestId } = renderCardContainer();

      expect(queryByTestId('spinner')).not.toBeNull();
    });
  });

  context('sentences fetching이 완료되면', () => {
    given('isLoading', () => false);
    given('isRefetching', () => false);
    given('data', () => [FIXTURE_SENTENCES]);

    it('spinner가 보이지 않아야 한다.', () => {
      const { queryByTestId } = renderCardContainer();

      expect(queryByTestId('spinner')).toBeNull();
    });
  });
});
