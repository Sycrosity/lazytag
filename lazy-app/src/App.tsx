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
import BottomNavBar from './components/BottomNavBar';

const App: React.FC = () => {

  useDeviceContext(tw, { withDeviceColorScheme: false });

  //allows setting and reading of the colour scheme (sets to phone colour scheme by default)
  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);

  //use effect loop example, triggering a text change every 1000ms
  // const [isShowingText, setIsShowingText] = useState(true);
  
  useEffect(() => {
    // const toggle = setInterval(() => {
    //   setIsShowingText(!isShowingText);
    // }, 1000);

    // return () => clearInterval(toggle);
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

        

      </View>

      <BottomNavBar />
    </SafeAreaView>
  );
};

export default App;
