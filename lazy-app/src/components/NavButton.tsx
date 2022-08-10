// import React from 'react';
import React, { PropsWithChildren } from 'react';

import {

    TouchableOpacity, View,
} from 'react-native';

import tw from 'twrnc';
import { Style } from 'twrnc/dist/esm/types';

type Props = {

    onPress: Function,
    style?: Style

};

const NavButton: React.FC<PropsWithChildren<Props>> = (props) => {

    return (

        <View style={props.style}>

            <TouchableOpacity onPress={props.onPress()} style={tw`rounded-full border-4 border-gray-400 p-1`} >
                    
                {props.children}
            </TouchableOpacity>
        </View>
    );
}

export default NavButton;
