import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ContactScreen} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
