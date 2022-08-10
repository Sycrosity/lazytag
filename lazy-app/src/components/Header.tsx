import React from 'react';

import {
    ColorSchemeName,
    Text,
    TextInput,
    View,
  } from 'react-native';

import tw from 'twrnc';

import DarkLightToggle from './DarkLightToggle';
import NavButton from './NavButton';

type Props = {
    theme: {
        value: ColorSchemeName,
        toggle: Function
    }
};

const Header: React.FC<Props> = (props) => {

    return (

        <View style={tw`flex-row w-full relative`}>

            <View style={tw`flex-1`}>

                <Text style={tw`dark:text-gray-300 text-6xl text-center `} >Lazy</Text>
                <Text style={tw`dark:text-gray-300 text-6xl text-center `} >Tag</Text>
            </View>

                <DarkLightToggle
                    value={props.theme.value}
                    toggle={props.theme.toggle}
                    style={tw`absolute right-0 top-0 p-2`}
                />
        </View>

    );
}

export default Header;