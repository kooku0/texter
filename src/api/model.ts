import { Sentence } from '@app/models/sentence';

import { Timestamp } from 'firebase/firestore';

export interface SentenceResponse extends Sentence {
  createdAt: Timestamp;
}
