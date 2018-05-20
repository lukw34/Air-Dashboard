import React from 'react';

import StatsComponent from '../components/Stats';

class Stats extends React.Component {
    state = {};

    render() {
        return <StatsComponent {...this.state} />;
    }
}

export default Stats;