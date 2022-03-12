import { renderHook } from '@testing-library/react-hooks';

import { fetchSentences } from '@app/api/sentence';
import { sentenceResponse as FIXTURE_SENTENCE_RESPONSE } from '@app/fixtures/setence';
import wrapper from '@app/test/ReactQueryWrapper';

import useFetchSentences from './useFetchSentences';

jest.mock('@app/api/sentence');

describe('useFetchSentences', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (fetchSentences as jest.Mock).mockResolvedValue([FIXTURE_SENTENCE_RESPONSE]);
  });

  const useFetchSentencesHook = () => renderHook(
    () => useFetchSentences(), { wrapper },
  );

  it('sentences를 가져와야 한다.', async () => {
    const { result, waitFor } = useFetchSentencesHook();

    await waitFor(() => !!result.current.data);

    expect(fetchSentences).toBeCalled();
    expect(result.current.data).toEqual([FIXTURE_SENTENCE_RESPONSE]);
  });
});
