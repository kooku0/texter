
import { useRef } from 'react';
import Swiper from 'react-native-deck-swiper';

import styled from '@emotion/native';

import Card from '../components/Card';
import CardStack from '../components/CardStack';
import { checkRefNull } from '../utils';

import CardController from './CardController';

function CardContainer() {
  const stackRef = useRef<Swiper<any>>(null);
  const items = [
    {
      text: '우리를 불행에 빠뜨리는\n원인 중 하나는 우리 주위에\n늘 있는 것을 알아차리지\n못하는 데 있다.',
      background: '#C0E9DC',
    },
    {
      text: '우리를 불행에 빠뜨리는\n원인 중 하나는 우리 주위에\n늘 있는 것을 알아차리지\n못하는 데 있다.',
      background: 'rgb(252, 188, 24)',
    },
    {
      text: '우리를 불행에 빠뜨리는\n원인 중 하나는 우리 주위에\n늘 있는 것을 알아차리지\n못하는 데 있다.',
      background: '#FFE4E4',
    },
  ];

  const handlePressPass = () => checkRefNull(stackRef)((swiper) => swiper.swipeLeft());
  const handlePressStore = () => checkRefNull(stackRef)((swiper) => swiper.swipeRight());

  return (
    <Container>
      <CardStackWrapper>
        <CardStack
          ref={stackRef}
          cards={items}
          renderCard={Card}
        />
      </CardStackWrapper>
      <CardController
        onPressPass={handlePressPass}
        onPressStore={handlePressStore}
      />
    </Container>
  );
}

export default CardContainer;

const CardStackWrapper = styled.View`
  flex: 5;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;
