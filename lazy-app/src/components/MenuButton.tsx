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

const MenuButton: React.FC<PropsWithChildren<Props>> = (props) => {

    return (


            <TouchableOpacity onPress={props.onPress()} style={tw`rounded-xl border-4 border-gray-300 w-5/8 h-16 mt-4 justify-center`} >
                    
                {props.children}
            </TouchableOpacity>
    );
}

export default MenuButton;
