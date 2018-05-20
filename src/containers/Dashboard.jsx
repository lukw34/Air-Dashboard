import React from 'react';

import DashboardComp from '../components/Dashboard';


class Dashboard extends React.Component {
    state = [{
        id: 92,
        isActive: true,
        stationId: 14,
        paramName: 'pył zawieszony PM10',
        paramCode: 'PM10',

    }, {
        id: 88,
        isActive: false,
        stationId: 14,
        paramName: 'dwutlenek azotu',
        paramCode: 'NO2',

    }];

    render() {
        const sideBoxes = this.state;
        return <DashboardComp sideBoxes={sideBoxes} />;
    }
}

export default Dashboard;