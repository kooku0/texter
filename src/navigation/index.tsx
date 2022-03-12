import * as React from 'react';

import HomeScreen from '@app/screens/HomeScreen';
import ModalScreen from '@app/screens/ModalScreen';
import NotFoundScreen from '@app/screens/NotFoundScreen';
import ProfileScreen from '@app/screens/ProfileScreen';
import WriteScreen from '@app/screens/WriteScreen';

import { RootStackParamList } from '../../@types/navigation';

import HeaderRight from './HeaderRight';
import LinkingConfiguration from './linking';
import LogoTitle from './LogoTitle';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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


