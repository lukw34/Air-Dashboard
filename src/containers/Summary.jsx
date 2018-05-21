import {connect} from 'react-redux';

import {summarySelector} from '../selectors/sensors.selectors';

import SummaryComp from '../components/Summary';

const mapStateToProps = state => ({
    summary: summarySelector(state)
});

export default connect(mapStateToProps)(SummaryComp);