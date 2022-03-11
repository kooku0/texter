import { Timestamp } from 'firebase/firestore';

import { Sentence } from '../models/sentence';

export interface SentenceResponse extends Sentence {
  createdAt: Timestamp;
}
