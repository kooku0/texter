import { fireEvent, render } from '@testing-library/react-native';

import SentenceInputArea from './SentenceInputArea';

describe('SentenceInputArea', () => {
  const onChangeSentence = jest.fn();

  const renderSentenceInputArea = (sentence: string) => render((
    <SentenceInputArea
      sentence={sentence}
      onChangeSentence={onChangeSentence}
    />
  ));

  context('글자를 입력하면', () => {
    const text = '문장씀';

    it('"onChangeSentence"가 호출되어야 한다.', () => {
      const { getByPlaceholderText } = renderSentenceInputArea('');

      const sentence = getByPlaceholderText(/문장/);

      fireEvent.changeText(sentence, text);

      expect(onChangeSentence).toBeCalledWith(text);
    });
  });

  it('문장 글자수 / 200 이 보여야 한다.', () => {
    const text = 'test-text';
    const { queryByText } = renderSentenceInputArea(text);

    expect(queryByText(`${text.length} / 200`)).not.toBeNull();
  });
});
