
import styled from '@emotion/native';
import { useRef } from 'react';

import Card from '../components/Card';
import CardStack from '../components/CardStack';

function HomeScreen() {
  const stackRef = useRef(null);
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

  return (
    <Container>
      <CardStack
        ref={stackRef}
        cards={items}
        renderCard={Card}
      />
    </Container>
  );
}

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;
