import { render } from '@testing-library/react-native';

import HomeScreen from './HomeScreen';

jest.mock('@app/hooks/api/useFetchSentences');
jest.mock('@app/hooks/useRefetchOnFocus');

describe('HomeScreen', () => {
  const renderHomeScreen = () => render((
    <HomeScreen />
  ));

  it('card가 보여야 한다.', () => {
    const { getAllByTestId } = renderHomeScreen();

    expect(getAllByTestId('card').length).toBeGreaterThan(0);
  });
});
