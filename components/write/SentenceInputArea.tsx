import { TouchableOpacity } from 'react-native';

import styled from '@emotion/native';

import InputMultiline from '../common/InputMultiline';

interface Props {
  sentence: string;
  onChangeSentence: (text: string) => void;
}

function SentenceInputArea({ sentence, onChangeSentence }: Props) {
  const maxLength = 200;

  return (
    <Wrapper>
      <InputMultiline
        text={sentence}
        onChangeText={onChangeSentence}
        maxLength={maxLength}
        placeholder="나에게 영감을 준 문장을 입력해주세요"
      />
      <NumberOfLetters>{`${sentence.length} / ${maxLength}`}</NumberOfLetters>
      <BackgroundSelectors>
        <TouchableOpacity accessibilityRole="button">
          <BackgroundSelector source={require('../../assets/images/image.png')} />
        </TouchableOpacity>
        <TouchableOpacity accessibilityRole="button">
          <BackgroundSelector source={require('../../assets/images/paint.png')} />
        </TouchableOpacity>
      </BackgroundSelectors>
    </Wrapper>
  );
}

export default SentenceInputArea;

const Wrapper = styled.View`
  position: relative;
  flex: 1;
`;

const NumberOfLetters = styled.Text`
  position: absolute;
  left: 16px;
  bottom: 16px;
  font-size: 14px;
  line-height: 22px;
  color: #7E7E7E;
`;

const BackgroundSelectors = styled.View`
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: flex;
  flex-direction: row;
`;

const BackgroundSelector = styled.Image`
  width: 24px;
  height: 24px;
  margin-left: 23px;
`;
