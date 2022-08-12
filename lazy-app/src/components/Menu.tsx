import React from 'react';
// import React, { PropsWithChildren } from 'react';

import {
    Text,
    View,
    } from 'react-native';

import tw from 'twrnc';
import MenuButton from './MenuButton';

const Menu: React.FC = () => {

    return (

        <View style={tw`text-white items-center mt-24 `}>
            
            <MenuButton style={tw`w-1/3 text-center p-4`} onPress={() => {}}>

                <Text style={tw`text-center dark:text-gray-300 text-3xl`}>create game</Text>

            </MenuButton>

            <MenuButton style={tw`w-1/3`} onPress={() => {}}>

                <Text style={tw`text-center dark:text-gray-300 text-3xl`}>join game</Text>

            </MenuButton>

        </View>

    );

}

export default Menu;
