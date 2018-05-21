import {connect} from 'react-redux';

import {selectSensors} from '../selectors/sensors.selectors';
import DashboardComp from '../components/Dashboard';
import {setActiveSensor} from '../actions/sensors.actions';

const mapStateToProps = state => ({
    sensors: selectSensors(state)
});

const mapDispatchToProps = dispatch => ({
    onSideBoxClick: id => dispatch(setActiveSensor(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(DashboardComp);