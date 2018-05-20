import React from 'react';

import StatsComponent from '../components/Stats';

class Stats extends React.Component {
    state = {
        min: 3,
        max: 6,
        average: 5.6,
        status: 'umiarkowane'
    };

    render() {
        return <StatsComponent {...this.state} />;
    }
}

export default Stats;