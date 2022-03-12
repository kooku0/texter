import { useMutation } from 'react-query';

import { addSentence } from '@app/api/sentence';
import { Sentence } from '@app/models/sentence';

function useAddSentence() {
  const mutation = useMutation((sentence: Sentence) => addSentence(sentence));

  return mutation;
}

export default useAddSentence;
