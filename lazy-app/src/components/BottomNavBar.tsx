
import React from 'react';
import tw from 'twrnc';

import { ColorSchemeName, View } from 'react-native';

import CogIcon from '../assets/icons/cog.svg';
import ChartBarIcon from '../assets/icons/chart-bar.svg';
import BeakerIcon from '../assets/icons/beaker.svg';
import UserIcon from '../assets/icons/user.svg';

import NavButton from './NavButton';
import Label from './Label';

type Props = {
    theme: {
        value: ColorSchemeName,
        toggle: Function,
    }
};

const BottomNavBar: React.FC<Props> = (props) => {


    return (

        <View style={tw`absolute bottom-0 p-4 flex-row justify-between w-full`}>

                <Label label="settings">

                    <NavButton onPress={() => {}}>
        
                        <CogIcon width="50" height="50" stroke={ props.theme.value === 'light' ? "gray" : "white"} />
                    </NavButton>
                </Label>


                <Label label="stats">

                    <NavButton onPress={() => {}}>
        
                        <ChartBarIcon width="50" height="50" stroke={ props.theme.value === 'light' ? "gray" : "white"} />
                    </NavButton>
                </Label>


                <Label label="the lab">

                    <NavButton onPress={() => {}}>
        
                        <BeakerIcon width="50" height="50" stroke={ props.theme.value === 'light' ? "gray" : "white"} />
                    </NavButton>
                </Label>


                <Label label="profile">

                    <NavButton onPress={() => {}}>
                        
                        <UserIcon width="50" height="50" stroke={ props.theme.value === 'light' ? "gray" : "white"} />
                    </NavButton>
                </Label>
        </View>
    );
}

export default BottomNavBar;
