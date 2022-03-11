import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../@types/navigation';
import HomeScreen from '../screens/HomeScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WriteScreen from '../screens/WriteScreen';

import HeaderRight from './HeaderRight';
import LinkingConfiguration from './linking';
import LogoTitle from './LogoTitle';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({
          headerTitle: () => <LogoTitle />,
          headerRight: () => <HeaderRight />,
        })}
      />
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={({
          title: '글쓰기',
          headerBackTitleVisible: false,
          headerTintColor: 'black',
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: '프로필',
          headerBackTitleVisible: false,
          headerTintColor: 'black',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}


