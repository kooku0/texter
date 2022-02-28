


import Swiper from 'react-native-deck-swiper';

import React, { useRef } from 'react';

import Card from './Card';

function CardStack2() {
  const swiperRef = useRef<Swiper<any>>(null);
  const items = [
    {
      text: 'text1',
      background: '#C0E9DC',
    },
    {
      text: 'text2',
      background: 'rgb(252, 188, 24)',
    },
    {
      text: 'text3',
      background: '#FFE4E4',
    },
  ];

  const swipeLeft = () => {
    if (swiperRef.current) {
      swiperRef.current.swipeLeft();
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      onTapCard={swipeLeft}
      cards={items}
      cardIndex={0}
      cardVerticalMargin={30}
      cardHorizontalMargin={20}
      renderCard={(props) => Card(props)}
      stackSize={3}
      stackSeparation={15}
      backgroundColor="white"
      animateOverlayLabelsOpacity
      animateCardOpacity
      swipeBackCard
      infinite
      disableTopSwipe
      disableBottomSwipe
    />
  );
}

export default CardStack2;

