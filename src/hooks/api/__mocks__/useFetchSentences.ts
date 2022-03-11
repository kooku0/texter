const useFetchSentences = jest.fn(() => ({
  data: [{
    text: 'mock-test',
    background: 'mock-background',
  }],
  isLoading: false,
  isRefetching: false,
  refetch: jest.fn(),
}));

export default useFetchSentences;
