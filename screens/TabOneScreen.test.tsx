import { render } from '@testing-library/react-native';

import TabOneScreen from './TabOneScreen';

describe('TabOneScreen', () => {
  const renderTabOneScreen = () => render((
    <TabOneScreen />
  ));

  context('렌더링이 완료되면', () => {
    it('"tab one"이 보여야 한다.', () => {
      const { queryByText } = renderTabOneScreen();

      expect(queryByText('Tab One')).not.toBeNull();
    });
  });
});
