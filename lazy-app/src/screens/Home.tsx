import React, { useState, useEffect, useContext } from 'react';

import tw from 'twrnc';

import {
    Button,
    ColorSchemeName,
    SafeAreaView,
    StatusBar,
    Text,
    View,
} from 'react-native';

import Header from '../components/Header';
import BottomNavBar from '../components/BottomNavBar';
import { Context } from '../components/Context';


type Props = {

    theme: {
        value: ColorSchemeName,
        toggle: Function
    },
    navigation: any

};

const Home: React.FC<Props> = (props) => {

    const context = useContext(Context);

    return (

        <SafeAreaView style={tw`h-full w-full dark:bg-neutral-900 flex bg-gray-100`}>

            <StatusBar />
            <Header theme={{value: "dark", toggle: () => {}}} />

            <Button
                title="Go to Details"
                onPress={() => props.navigation.navigate('Details')}
            />

            <BottomNavBar theme={{value: "dark", toggle: () => {}}} />
        </SafeAreaView>

    );

}

export default Home;
