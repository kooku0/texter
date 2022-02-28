import styled from '@emotion/native';

interface Props {
  text: string;
}

function Card({ text }: Props) {
  return (
    <CardWrapper>
      <CardText>{text}</CardText>
    </CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.View`
  width: 100%;
  min-height: 480px;
  background-color: #C0E9DC;
  border-radius: 8px;
  justify-content: center;
  padding: 24px;
`;

const CardText = styled.Text`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`;
