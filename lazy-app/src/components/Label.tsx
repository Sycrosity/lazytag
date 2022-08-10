import React, { PropsWithChildren } from 'react';

import {
    Text,
    View,
    } from 'react-native';

import tw from 'twrnc';

type Props = {

    label: String

};

const Label: React.FC<PropsWithChildren<Props>> = (props) => {

    return (

        <View style={tw` flex-column`}>
            
            {props.children}

            <Text style={tw`dark:text-gray-300 text-center`}>{props.label}</Text>

        </View>

    );

}

export default Label;
