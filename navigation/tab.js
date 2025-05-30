import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import StackA from './stackA';
import StackB from './stackB';
import StackC from './stackC';
import StackD from './stackD';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="StackA" component={StackA} options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
      }}/>
      <Tab.Screen name="StackB" component={StackB} options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color} />,
      }}/>
      <Tab.Screen name="StackC" component={StackC} options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
      }}/>
      <Tab.Screen name="StackD" component={StackD} options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />,
      }}/>
    </Tab.Navigator>
  );
}