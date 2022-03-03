import React, { ForwardedRef, forwardRef, ReactElement } from 'react';
import Swiper from 'react-native-deck-swiper';

import { css } from '@emotion/native';

interface Props<CardProps> {
  cards: CardProps[];
  renderCard: (props: CardProps) => ReactElement;
}

function CardStack<CardProps>(props: Props<CardProps>, ref: ForwardedRef<Swiper<CardProps>>) {
  const { cards, renderCard: Card } = props;

  return (
    <Swiper
      ref={ref}
      cards={cards}
      cardIndex={0}
      cardStyle={CardStyle}
      cardVerticalMargin={30}
      cardHorizontalMargin={20}
      renderCard={(cardProps) => Card(cardProps)}
      stackSize={3}
      stackSeparation={15}
      backgroundColor="transparent"
      animateOverlayLabelsOpacity
      animateCardOpacity
      swipeBackCard
      infinite
      disableTopSwipe
      disableBottomSwipe
    />
  );
}

export default forwardRef<Swiper<any>, any>(CardStack);

const CardStyle = css`
  top: 24;
  left: 16;
  bottom: 60;
  right: 16;
  width: auto;
  height: auto;
`;
