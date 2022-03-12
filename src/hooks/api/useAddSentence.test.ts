import { act, renderHook } from '@testing-library/react-hooks';

import { addSentence } from '@app/api/sentence';
import { sentence as FIXTURE_SENTENCE } from '@app/fixtures/setence';
import wrapper from '@app/test/ReactQueryWrapper';

import useAddSentence from './useAddSentence';

jest.mock('@app/api/sentence');

describe('useAddSentence', () => {
  const useAddSentenceHook = () => renderHook(
    () => useAddSentence(), { wrapper },
  );

  it('sentence를 추가해야 한다.', async () => {
    const { result } = useAddSentenceHook();

    await act(async () => {
      await result.current.mutate(FIXTURE_SENTENCE);
    });

    expect(addSentence).toBeCalledWith(FIXTURE_SENTENCE);
  });
});
