import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/route';
import FlashMessage from 'react-native-flash-message';

console.disableYellowBox = true;

const MainApp = () => {
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

const App = () => {
  return <MainApp />;
};

export default App;
