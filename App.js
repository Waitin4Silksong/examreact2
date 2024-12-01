
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { OrdersProvider } from './context/OrdersContext';
import HomeScreen from './screens6/HomeScreen';
import ListScreen from './screens6/ListScreen';
import OrderScreen from './screens6/OrderScreen';
import DetailsScreen from './screens6/DetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const OrdersStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Orders" component={ListScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <OrdersProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Orders" component={OrdersStack} />
          <Tab.Screen name="New Order" component={OrderScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </OrdersProvider>
  );
}
