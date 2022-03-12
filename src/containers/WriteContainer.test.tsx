import { fireEvent, render } from '@testing-library/react-native';

import WriteContainer from './WriteContainer';

jest.mock('@react-navigation/native');
jest.mock('@app/hooks/api/useAddSentence');

describe('WriteContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
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
});
