import { render } from '@testing-library/react-native';

import Card from './Card';

describe('Card', () => {
  const renderCard = (text: string) => render((
    <Card text={text} />
  ));

  it('전달된 text가 보여야 한다.', () => {
    const text = 'text';
    const { getByText } = renderCard(text);

    expect(getByText(text)).not.toBeNull();
  });
});
