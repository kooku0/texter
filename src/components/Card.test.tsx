import { render } from '@testing-library/react-native';

import Card from './Card';

describe('Card', () => {
  const renderCard = (text: string, background = '#fff') => render((
    <Card text={text} background={background} />
  ));

  it('전달된 text가 보여야 한다.', () => {
    const text = 'text';
    const { getByText } = renderCard(text);

    expect(getByText(text)).not.toBeNull();
  });

  it('전달된 background-color가 보여야 한다.', () => {
    const background = 'blue';
    const { getByTestId } = renderCard('text', background);

    expect(getByTestId('card')).toHaveStyle({
      backgroundColor: background,
    });
  });
});
