import React from 'react';

import {
    ColorSchemeName,
    View,
    TouchableOpacity,
    Text
    } from 'react-native';

import Light from '../components/icons/Light';
import Dark from '../components/icons/Dark';
import { Style } from 'twrnc/dist/esm/types';


type Props = {
    value: ColorSchemeName,
    toggle: Function,
    style: Style
};

const DarkLightToggle: React.FC<Props> = (props) => {

    return (
        
        <TouchableOpacity
            onPress={() => props.toggle()}
            style={props.style}
        >

            { props.value === "light" ? <Light /> : <Dark /> }

        </TouchableOpacity>

    );

}

export default DarkLightToggle;
