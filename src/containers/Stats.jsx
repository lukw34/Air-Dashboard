import {connect} from 'react-redux';

import StatsComponent from '../components/Stats';
import {getMinValue, getAverageValue, getMaxValue} from '../selectors/plot.selectors';

const mapStateToProps = state => ({
    min: getMinValue(state),
    max: getMaxValue(state),
    average: getAverageValue(state)
});

export default connect(mapStateToProps)(StatsComponent);