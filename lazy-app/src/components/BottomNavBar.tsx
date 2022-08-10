
import React from 'react';
import tw from 'twrnc';

import { View } from 'react-native';

import Cog from './icons/Cog';
import ChartBar from './icons/ChartBar';
import Beaker from './icons/Beaker';
import User from './icons/User';

import NavButton from './NavButton';

const BottomNavBar: React.FC = () => {

    return (

        <View style={tw`absolute bottom-0 p-4 flex-row justify-between w-full`}>

            {/* <Text style={tw`dark:text-gray-300 `}>Template</Text> */}

                <NavButton onPress={() => {}}>
    
                    <Cog />
                </NavButton>

                <NavButton onPress={() => {}}>
    
                    <ChartBar />
                </NavButton>

                <NavButton onPress={() => {}}>
    
                    <Beaker />
                </NavButton>

                <NavButton onPress={() => {}}>
                    
                    <User />
                </NavButton>
        </View>
    );
}

export default BottomNavBar;
