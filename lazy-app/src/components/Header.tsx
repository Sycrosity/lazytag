import React from 'react';

import {
    ColorSchemeName,
    Text,
    TextInput,
    View,
  } from 'react-native';

import tw from 'twrnc';

import DarkLightToggle from './DarkLightToggle';

type Props = {
    theme: {
        value: ColorSchemeName,
        toggle: Function
    }
};

const Header: React.FC<Props> = (props) => {



    return (

        <View style={tw`flex-row w-full`}>
            <Text style={tw`dark:text-gray-300 text-3xl text-center flex-1`}>LazyTag</Text>
            <DarkLightToggle value={props.theme.value} toggle={props.theme.toggle} />
        </View>



    );

}

export default Header;