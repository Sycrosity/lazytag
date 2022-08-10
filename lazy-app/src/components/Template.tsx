import React, { PropsWithChildren } from 'react';

import {
    Text,
    View,
    } from 'react-native';

import tw from 'twrnc';

const Template: React.FC = () => {

    return (

        <View>
            <Text style={tw`text-white`}>Template</Text>
        </View>

    );

}

export default Template;
