import {connect} from 'react-redux';

import {summarySelector, getNormPercentage} from '../selectors/sensors.selectors';

import SummaryComp from '../components/Summary';

const mapStateToProps = state => ({
    summary: summarySelector(state),
    norms: getNormPercentage(state, ['PM10', 'SO2', 'NO2'])
});

export default connect(mapStateToProps)(SummaryComp);