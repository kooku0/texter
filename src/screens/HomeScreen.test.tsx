import { render } from '@testing-library/react-native';

import HomeScreen from './HomeScreen';

jest.mock('@app/hooks/api/useFetchSentences');
jest.mock('@app/hooks/useRefetchOnFocus');
jest.mock('@app/components/CardStack');

describe('HomeScreen', () => {
  const renderHomeScreen = () => render((
    <HomeScreen />
  ));

  it('card가 보여야 한다.', () => {
    const { queryByTestId } = renderHomeScreen();

    expect(queryByTestId('cardStack')).not.toBeNull();
  });
});
