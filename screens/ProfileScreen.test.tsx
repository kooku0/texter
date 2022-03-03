import { render } from '@testing-library/react-native';

import ProfileScreen from './ProfileScreen';

describe('ProfileScreen', () => {
  const renderProfileScreen = () => render((
    <ProfileScreen />
  ));

  it('"프로필" 문구가 보여야 한다.', () => {
    const { getByText } = renderProfileScreen();

    expect(getByText('프로필')).not.toBeNull();
  });
});
