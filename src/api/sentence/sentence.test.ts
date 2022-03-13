import { sentence as FIXTURE_SENTENCE, sentenceResponse as FIXTURE_SENTENCE_RESPONSE } from '@app/fixtures/setence';

import { addSentence, fetchSentences } from '.';

import { addDoc, getDocs, Timestamp } from 'firebase/firestore';

jest.mock('@firebase/firestore');

describe('sentence', () => {
  describe('addSentence', () => {
    it('글을 추가해야 한다.', () => {
      addSentence(FIXTURE_SENTENCE);

      expect(addDoc).toBeCalledWith(undefined, {
        ...FIXTURE_SENTENCE,
        createdAt: Timestamp.now(),
      });
    });
  });

  describe('fetchSentences', () => {
    beforeEach(() => {
      (getDocs as jest.Mock).mockReturnValue({
        docs: [{ data: () => FIXTURE_SENTENCE_RESPONSE}],
      });
    });

    it('모든 글들을 반환해야 한다.', async () => {
      const response = await fetchSentences();

      expect(response).toEqual([FIXTURE_SENTENCE_RESPONSE]);
    });
  });
});
