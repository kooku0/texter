import { fireEvent, render } from '@testing-library/react-native';

import WriteContainer from './WriteContainer';

describe('WriteContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    global.alert = jest.fn();
  });

  const renderWriteContainer = () => render((
    <WriteContainer />
  ));

  context('문장을 쓰면', () => {
    it('글자가 써져야 한다.', () => {
      const text = '문장씀';
      const { getByPlaceholderText } = renderWriteContainer();

      const sentence = getByPlaceholderText(/문장/);

      fireEvent.changeText(sentence, text);

      expect(sentence.instance.props.value).toBe(text);
    });
  });

  context('제목을 쓰면', () => {
    it('글자가 써져야 한다.', () => {
      const text = '제목씀';
      const { getByPlaceholderText } = renderWriteContainer();

      const title = getByPlaceholderText(/제목/);

      fireEvent.changeText(title, text);

      expect(title.instance.props.value).toBe(text);
    });
  });

  context('링크를 쓰면', () => {
    it('글자가 써져야 한다.', () => {
      const text = '링크씀';
      const { getByPlaceholderText } = renderWriteContainer();

      const link = getByPlaceholderText(/링크/);

      fireEvent.changeText(link, text);

      expect(link.instance.props.value).toBe(text);
    });
  });

  context('완료를 누르면', () => {
    it('"clicked" alert가 떠야한다.', () => {
      const { getByText } = renderWriteContainer();

      fireEvent.press(getByText('완료'));

      expect(alert).toBeCalledWith('clicked');
    });
  });
});
