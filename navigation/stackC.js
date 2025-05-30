import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenA from '../screens/ScreenA';

const Stack = createNativeStackNavigator();

export default function StackA() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenA" component={ScreenA} />
    </Stack.Navigator>
  );
}