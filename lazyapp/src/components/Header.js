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

import {useTailwind} from 'tailwind-rn';


const Header = () => {
    const tailwind = useTailwind();

    return (

        <View>
            <Text style={tailwind('dark:text-white')}>Hello, I am...</Text>
            <TextInput
                style={tailwind('dark:text-white h-10 dark:border-white border-black border-2')}
                defaultValue="Name me!"
            />
        </View>

    );

}

export default Header;