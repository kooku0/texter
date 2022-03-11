import { useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Spinner from 'react-native-loading-spinner-overlay';

import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../@types/navigation';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import SentenceInputArea from '../components/write/SentenceInputArea';
import useAddSentence from '../hooks/api/useAddSentence';
import { Sentence } from '../models/sentence';
import { styles } from '../styles/common';

type State = Sentence;
type WriteScreenProps = NativeStackNavigationProp<RootStackParamList, 'Write'>;

function WriteContainer() {
  const navigation = useNavigation<WriteScreenProps>();
  const { mutate, isLoading, isSuccess } = useAddSentence();
  const [state, setState] = useState<State>({
    sentence: '',
    title: '',
    link: '',
  });

  const { sentence, title, link } = state;

  const handleChangeSentence = (value: string) => setState({
    ...state,
    sentence: value,
  });
  const handleChangeTitle = (value: string) => setState({
    ...state,
    title: value,
  });
  const handleChangeLink = (value: string) => setState({
    ...state,
    link: value,
  });

  const handlePressComplete = () => mutate(state);

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate('Home');
    }
  }, [isSuccess, navigation]);

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Wrapper>
        <SentanceSection>
          <SubTitle>문장</SubTitle>
          <SentenceInputArea
            sentence={sentence}
            onChangeSentence={handleChangeSentence}
          />
        </SentanceSection>
        <Section>
          <SubTitle>출처</SubTitle>
          <Input
            text={title}
            onChangeText={handleChangeTitle}
            placeholder="제목"
          />
          <Input
            text={link}
            onChangeText={handleChangeLink}
            placeholder="링크"
          />
        </Section>
        <Button
          title="완료"
          color="#fff"
          backgroundColor="#000"
          onPress={handlePressComplete}
        />
        <Spinner visible={isLoading} size="large" />
      </Wrapper>
    </KeyboardAwareScrollView>
  );
}

export default WriteContainer;

const Wrapper = styled.View`
  flex: 1;
  background-color: white;
  padding: 8px 16px;
`;

const Section = styled.View`
  margin-bottom: 16px;
`;

const SubTitle = styled.Text`
  margin-bottom: 8px;
  margin-left: 8px;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #575757;
`;

const SentanceSection = styled(Section)`
  flex: 5;
`;
