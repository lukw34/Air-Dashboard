import {connect} from 'react-redux';

import StatsComponent from '../components/Stats';
import {getMinValue, getAverageValue, getMaxValue, getMedianValue} from '../selectors/plot.selectors';

const mapStateToProps = state => ({
    min: getMinValue(state),
    max: getMaxValue(state),
    average: getAverageValue(state),
    median: getMedianValue(state)
});

export default connect(mapStateToProps)(StatsComponent);