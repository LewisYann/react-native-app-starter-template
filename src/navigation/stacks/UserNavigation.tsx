import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import MainTabs from '../tabs/MainTabs';

const Stack = createStackNavigator();
const defaultStackNavOptions: StackNavigationOptions = {
  headerTransparent: false,
  headerBackTitleVisible: false,
};

// #TODO: IMPROVE TYPE
export type RootStackParamList = {
  Auth: undefined;
  Registration: undefined;
  Login: undefined;
  Home: undefined;
  OrderAcceptedStep: undefined;
  OrderShippingStep: undefined;
  OrderConfirmedStep: undefined;
  AccountScreen: undefined;
  ProfileScreen: undefined;
  WalletScreen: undefined;
  AllHistoryOrderTabs: undefined;
  AllHistoryOrderScreen: undefined;
  HistoryAcceptedOrderHistory: undefined;
  HistoryCancelledOrderHistory: undefined;
  TransactionSearch: undefined;
  HistoryOrderDetailsScreen: {orderId: string};
  RaceOrderScreen: undefined;
  HistoryScreen: undefined;
  PendingOrderScreen: undefined;
};

export const UserNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="MainNavigator"
        options={{headerShown: false, headerTransparent: true}}
        component={MainTabs}
      />
    </Stack.Navigator>
  );
};
