/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { RootStackParamList } from '../../@types/navigation';

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Home: '',
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
