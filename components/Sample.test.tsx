import { render } from '@testing-library/react-native';

import Sample from './Sample';

describe('Sample', () => {
  const renderSample = () => render((
    <Sample text={given.text} />
  ));

  context('test에 전달된 값이', () => {
    given('text', () => 'hello');

    it('보여야 한다.', () => {
      const { queryByText } = renderSample();

      expect(queryByText('hello')).not.toBeNull();
    });
  });
});
