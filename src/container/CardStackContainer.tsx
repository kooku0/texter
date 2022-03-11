import { useRef } from 'react';
import Swiper from 'react-native-deck-swiper';

import styled from '@emotion/native';
import randomColor from 'randomcolor';

import { SentenceResponse } from '../api/model';
import Card from '../components/Card';
import CardController from '../components/CardController';
import CardStack from '../components/CardStack';
import { checkRefNull } from '../utils';

interface Props {
  sentences: SentenceResponse[];
}

function CardStackContainer({ sentences }: Props) {
  const stackRef = useRef<Swiper<any>>(null);
  const items = sentences.map((item) => ({
    text: item.sentence,
    background: randomColor(),
  }));

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

export default CardStackContainer;

const CardStackWrapper = styled.View`
  flex: 5;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;
