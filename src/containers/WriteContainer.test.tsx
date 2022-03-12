import { fireEvent, render } from '@testing-library/react-native';

import useAddSentence from '@app/hooks/api/useAddSentence';
import { Sentence } from '@app/models/sentence';

import WriteContainer from './WriteContainer';

import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native');
jest.mock('@app/hooks/api/useAddSentence');

describe('WriteContainer', () => {
  const navigate = jest.fn();
  const mutate = jest.fn();
  const state: Sentence = {
    sentence: '문장',
    title: '제목',
    link: '링크',
  };

  beforeEach(() => {
    jest.clearAllMocks();

    (useNavigation as jest.Mock).mockImplementation(() => ({
      navigate,
    }));

    (useAddSentence as jest.Mock).mockImplementation(() => ({
      mutate,
      isLoading: given.isLoading,
      isSuccess: given.isSuccess,
    }));
  });

  const renderWriteContainer = () => render((
    <WriteContainer />
  ));

  context('문장을 쓰면', () => {
    it('글자가 써져야 한다.', () => {
      const { getByPlaceholderText } = renderWriteContainer();

      const sentence = getByPlaceholderText(/문장/);

      fireEvent.changeText(sentence, state.sentence);

      expect(sentence.instance.props.value).toBe(state.sentence);
    });
  });

  context('제목을 쓰면', () => {
    it('글자가 써져야 한다.', () => {
      const { getByPlaceholderText } = renderWriteContainer();

      const title = getByPlaceholderText(/제목/);

      fireEvent.changeText(title, state.title);

      expect(title.instance.props.value).toBe(state.title);
    });
  });

  context('링크를 쓰면', () => {
    it('글자가 써져야 한다.', () => {
      const { getByPlaceholderText } = renderWriteContainer();

      const link = getByPlaceholderText(/링크/);

      fireEvent.changeText(link, state.link);

      expect(link.instance.props.value).toBe(state.link);
    });
  });

  context('완료를 누르면', () => {
    it('문장을 추가해야 한다.', () => {
      const { getByText, getByPlaceholderText } = renderWriteContainer();

      fireEvent.changeText(getByPlaceholderText(/문장/), state.sentence);
      fireEvent.changeText(getByPlaceholderText(/제목/), state.title);
      fireEvent.changeText(getByPlaceholderText(/링크/), state.link);

      fireEvent.press(getByText(/완료/));

      expect(mutate).toBeCalledWith(state);
    });
  });

  context('문장추가가 완료되면', () => {
    given('isSuccess', () => true);

    it('홈으로 이동해야 한다.', () => {
      renderWriteContainer();

      expect(navigate).toBeCalledWith('Home');
    });
  });
});
