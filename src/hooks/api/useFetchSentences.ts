import { useQuery } from 'react-query';

import { fetchSentences } from '@app/api/sentence';

function useFetchSentences() {
  const query = useQuery('sentences', fetchSentences);

  return query;
}

export default useFetchSentences;
