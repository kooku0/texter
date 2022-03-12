import { useRef } from 'react';
import Swiper from 'react-native-deck-swiper';

import { SentenceResponse } from '@app/api/sentence/model';
import Card from '@app/components/Card';
import CardController from '@app/components/CardController';
import CardStack from '@app/components/CardStack';
import { checkRefNull } from '@app/utils';

import styled from '@emotion/native';
import randomColor from 'randomcolor';

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
