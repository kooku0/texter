const useAddSentence = jest.fn(() => ({
  mutate: jest.fn(),
  isLoading: false,
  isSuccess: false,
}));

export default useAddSentence;
