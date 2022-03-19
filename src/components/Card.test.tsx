import { render } from '@testing-library/react-native';

import Card from './Card';

describe('Card', () => {
  const renderCard = (sentence: string, title: string, link: string) => render((
    <Card
      sentence={sentence}
      title={title}
      link={link}
    />
  ));

  it('전달된 text가 보여야 한다.', () => {
    const sentence = 'sentence';
    const title = 'title';
    const link = 'link';
    const { getByText } = renderCard(sentence, title, link);

    expect(getByText(sentence)).not.toBeNull();
  });
});
