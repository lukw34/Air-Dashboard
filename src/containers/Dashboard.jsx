import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import DashboardComp from '../components/Dashboard';

const mapStateToProps = ({sensors: {sensors}, activeSensor}) => ({
    sensors,
    activeSensor
});


class Dashboard extends React.Component {
    static propTypes = {
        sensors: PropTypes.shape({}),
        activeSensor: PropTypes.string
    };

    mapSensors = () => {
        const {sensors, activeSensor} = this.props;
        return Object.keys(sensors).map(key => ({
            ...sensors[key],
            isActive: key === activeSensor
        }));
    };

    render() {
        return <DashboardComp sensors={this.mapSensors()} />;
    }
}

export default connect(mapStateToProps)(Dashboard);