import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screens from 'constants/Screens';
import HomeScreen from 'screens/Home';

const TabBottom = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <TabBottom.Navigator>
      <TabBottom.Screen name={Screens.Home} component={HomeScreen} />
    </TabBottom.Navigator>
  );
};

export default MainTabs;
