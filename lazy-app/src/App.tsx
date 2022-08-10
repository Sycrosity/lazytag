/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  // useColorScheme,
  View,
} from 'react-native';


import Header from './components/Header';
import DarkLightToggle from './components/DarkLightToggle';
import Light from './components/icons/Light';
import Dark from './components/icons/Dark';

  //https://tailwindcss.com/
import tw, { useDeviceContext, useAppColorScheme } from 'twrnc';


const App: React.FC = () => {

  useDeviceContext(tw, { withDeviceColorScheme: false });

  //allows setting and reading of the colour scheme (sets to phone colour scheme by default)
  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);

  //use effect loop example, triggering a text change every 1000ms
  const [isShowingText, setIsShowingText] = useState(true);
  useEffect(() => {
    const toggle = setInterval(() => {
      setIsShowingText(!isShowingText);
    }, 1000);

    return () => clearInterval(toggle);
  })


  return (
    <SafeAreaView style={tw`h-full w-full dark:bg-neutral-900 flex`}>

      <StatusBar />

      <Header theme={
        {
          value: colorScheme,
          toggle: toggleColorScheme
        }} 
      />


      <View>

        <Text style={tw`dark:text-gray-300 `}>{colorScheme === 'light' ? 'ahhhhhhh the light!' : 'dark modeee :)'}</Text>
        <Text style={tw`dark:text-gray-300`} >{isShowingText ? 'bleep' : 'blink'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
