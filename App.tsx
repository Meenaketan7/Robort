import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './App/components/AuthStack';
import Home from './App/screens/home/Home';
// import AppStack from './src/navigation/AppStack';

function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
    // <Home />
  );
}

export default App;
