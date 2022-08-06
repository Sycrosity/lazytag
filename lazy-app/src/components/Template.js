import React from 'react';

import {
    Text,
    View,
    } from 'react-native';

import {useTailwind} from 'tailwind-rn';

const Header = () => {

    const tailwind = useTailwind();

    return (

        <View>
            <Text style={tailwind('text-white')}>Template</Text>

        </View>

    );

}

export default Header;