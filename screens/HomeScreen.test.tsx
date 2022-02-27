import { render } from '@testing-library/react-native';

import HomeScreen from './HomeScreen';

describe('HomeScreen', () => {
  const renderHomeScreen = () => render((
    <HomeScreen />
  ));

  it('Home 문구가 보여야 한다.', () => {
    const { queryByText } = renderHomeScreen();

    expect(queryByText('Home')).not.toBeNull();
  });
});
