import React from 'react';

import {
    ColorSchemeName,
    View,
    TouchableOpacity,
    Text
    } from 'react-native';

import SunIcon from '../components/icons/sun.svg';
import MoonIcon from '../components/icons/moon.svg';
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

            {
                props.value === "light" ? 
                <SunIcon width="50" height="50" stroke="lightblue" /> : 
                <MoonIcon width="50" height="50" stroke="lightblue" />
            }
        </TouchableOpacity>
    );
}

export default DarkLightToggle;
