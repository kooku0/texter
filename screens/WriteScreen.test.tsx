import { render } from '@testing-library/react-native';

import WriteScreen from './WriteScreen';

jest.mock('react-native-keyboard-aware-scroll-view');

describe('WriteScreen', () => {
  const renderWriteScreen = () => render((
    <WriteScreen />
  ));

  it('"문장" 문구가 보여야 한다.', () => {
    const { queryByText } = renderWriteScreen();

    expect(queryByText('문장')).not.toBeNull();
  });
});
