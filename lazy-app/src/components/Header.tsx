import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
  } from 'react-native';

const Header = () => {

    return (

        <View className='flex bg-red-400 dark:text-white'>
            <View>
                <Text className='bg-blue-500 text-red-600 text-xl text-center dark:text-white'>LazyTag</Text>
            </View>
            <Text className=''>Hello, I am...</Text>
            <TextInput
                className='h-10 dark:border-white border-black border-2'
                defaultValue="Name me!"
            />
        </View>

    );

}

export default Header;