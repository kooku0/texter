import { addDoc, collection, DocumentData, getDocs, query } from '@firebase/firestore';
import { orderBy, Timestamp } from 'firebase/firestore';

import { Sentence } from '../models/sentence';
import { firestore } from '../services/firebase';

import { SentenceResponse } from './model';

const COLECTION_NAME = 'sentences';
const sentencesCol = collection(firestore, COLECTION_NAME);

export async function addSentence(sentence: Sentence): Promise<DocumentData> {
  const docRef = await addDoc(sentencesCol, {
    ...sentence,
    createdAt: Timestamp.now(),
  });

  return docRef;
}


export async function fetchSentences(): Promise<SentenceResponse[]> {
  const q = query(sentencesCol, orderBy('createdAt', 'desc'));
  const sentenceSnapshot = await getDocs(q);
  const sentences = sentenceSnapshot.docs.map(doc => doc.data());

  return sentences as SentenceResponse[];
}
