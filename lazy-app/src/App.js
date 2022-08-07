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
  useColorScheme,
  View,
} from 'react-native';

import Header from './components/Header';

const App = () => {

  //https://tailwindcss.com/

  //sets to whatever the phones colour scheme is, and creates a state with for it
  const isDarkMode = useColorScheme() === 'dark';
  const [isDark, setIsDark] = useState(isDarkMode);

  const [isShowingText, setIsShowingText] = useState(true);

  useEffect(() => {
    const toggle = setInterval(() => {
      setIsShowingText(!isShowingText);
    }, 1000);

    return () => clearInterval(toggle);
  })

  userDark = true;

  return (
    <SafeAreaView className='flex items-center justify-center w-full bg-neutral-900 h-full'>
      <StatusBar />
      <Header />
      <View>
        <Text className='text-gray-300'>main</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
