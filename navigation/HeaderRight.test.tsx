import { useNavigation } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';

import HeaderRight from './HeaderRight';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('HeaderRight', () => {
  const navigate = jest.fn();

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({
      navigate,
    });
  });

  const renderHeaderRight = () => render((
    <HeaderRight />
  ));

  context('글쓰기 버튼을 누르면', () => {
    it('Write 페이지로 이동해야 한다.', () => {
      const { getByTestId } = renderHeaderRight();

      fireEvent.press(getByTestId('write-icon'));

      expect(navigate).toBeCalledWith('Write');
    });
  });

  context('프로필 버튼을 누르면', () => {
    it('Profile 페이지로 이동해야 한다.', () => {
      const { getByTestId } = renderHeaderRight();

      fireEvent.press(getByTestId('profile-icon'));

      expect(navigate).toBeCalledWith('Profile');
    });
  });
});
