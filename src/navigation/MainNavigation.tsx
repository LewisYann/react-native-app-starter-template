import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {UserNavigator} from './stacks/UserNavigation';

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <UserNavigator />
    </NavigationContainer>
  );
}
