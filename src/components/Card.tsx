import { ScrollView, Text, TouchableWithoutFeedback } from 'react-native';

import { Sentence } from '@app/models/sentence';

import styled from '@emotion/native';

type Props = Sentence;

function Card({ sentence, title, link }: Props) {
  return (
    <CardWrapper background="#C8DCEB" testID="card">
      <ScrollView>
        <TouchableWithoutFeedback accessibilityRole="button">
          <CardText>{sentence}</CardText>
        </TouchableWithoutFeedback>
      </ScrollView>
      <Text>{title}</Text>
      <Text>{link}</Text>
    </CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.View<{ background: string; }>`
  width: 100%;
  height: 100%;
  background-color: ${({ background }) => background};
  border-radius: 8px;
  justify-content: center;
  padding: 24px;
  border: 1px solid #E5E8EC;
`;

const CardText = styled.Text`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: black;
`;
