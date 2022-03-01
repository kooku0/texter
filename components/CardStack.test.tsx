import { Text, View } from 'react-native';

import { render } from '@testing-library/react-native';

import CardStack from './CardStack';

describe('CardStack', () => {
  const cards = [{ text: 'card1' }];
  const mockComponent = ({ text }: { text: string }) => (
    <View>
      <Text>{text}</Text>
    </View>
  );

  const renderCardStack = () => render((
    <CardStack
      cards={cards}
      renderCard={mockComponent}
    />
  ));

  it('cards의 item data들이 renderCard로 전달되어야 한다.', () => {
    const { getAllByText } = renderCardStack();

    expect(getAllByText(cards[0].text).length).toBeGreaterThan(0);
  });
});
