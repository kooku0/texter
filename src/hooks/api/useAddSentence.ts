import { useMutation } from 'react-query';

import { addSentence } from '../../api/sentence';
import { Sentence } from '../../models/sentence';

function useAddSentence() {
  const mutation = useMutation((sentence: Sentence) => addSentence(sentence));

  return mutation;
}

export default useAddSentence;
