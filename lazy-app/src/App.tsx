/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

//https://tailwindcss.com/
//https://github.com/jaredh159/tailwind-react-native-classnames
import tw, { useDeviceContext, useAppColorScheme } from 'twrnc';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();



import Home from './screens/Home';
import Details from './screens/Details';

import { ColorSchemeName, StatusBar } from 'react-native';

import { Context } from './components/Context';


const App: React.FC = () => {

  useDeviceContext(tw, { withDeviceColorScheme: false });

  //allows setting and reading of the colour scheme (sets to phone colour scheme by default)
  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);

  return (
    <Context.Provider value={
      {
        theme: {
          value: colorScheme,
          toggle: toggleColorScheme
        }
      }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

export default App;
