import styled from '@emotion/native';

interface Props {
  text: string;
  background: string;
}

function Card({ text, background }: Props) {
  return (
    <CardWrapper background={background} testID="card">
      <CardText>{text}</CardText>
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
