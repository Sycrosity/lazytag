

import React from 'react';

import Svg, { Path } from 'react-native-svg';

const ChartBar: React.FC = () => {

    return (

        <Svg width="50" height="50" fill="none" viewBox="0 0 24 24" stroke="gray" strokeWidth={2}>
            <Path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </Svg>
    );
}

export default ChartBar;
