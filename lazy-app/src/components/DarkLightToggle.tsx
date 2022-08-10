import React from 'react';

import {
    ColorSchemeName,
    View,
    TouchableOpacity,
    Text
    } from 'react-native';

import Light from '../components/icons/Light';
import Dark from '../components/icons/Dark';


type Props = {
    value: ColorSchemeName,
    toggle: Function
};

import tw from 'twrnc';

const DarkLightToggle: React.FC<Props> = (props) => {

    //allows setting and reading of the colour scheme (sets to phone colour scheme by default)
    // const [colorScheme, toggleColorScheme, _] = useAppColorScheme(tw);

    return (

        <TouchableOpacity
            onPress={() => props.toggle()}
            style={tw` self-end `}
        >

            { props.value === "light" ? <Light /> : <Dark /> }

        </TouchableOpacity>

    );

}

export default DarkLightToggle;
