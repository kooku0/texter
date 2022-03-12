import { SentenceResponse } from '@app/api/sentence/model';
import { Sentence } from '@app/models/sentence';

import { Timestamp } from 'firebase/firestore';

export const sentence: Sentence = {
  title: '제목',
  sentence: '문장',
  link: '링크',
};

export const sentenceResponse: SentenceResponse = {
  sentence: '문장',
  title: '제목',
  link: '링크',
  createdAt: Timestamp.now(),
};
