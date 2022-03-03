import { render } from '@testing-library/react-native';

import WriteScreen from './WriteScreen';

describe('WriteScreen', () => {
  const renderWriteScreen = () => render((
    <WriteScreen />
  ));

  it('"글쓰기" 문구가 보여야 한다.', () => {
    const { getByText } = renderWriteScreen();

    expect(getByText('글쓰기')).not.toBeNull();
  });
});
