import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {isPlotInit, activePlotData} from '../selectors/plot.selectors';

import LineGraph from '../components/LineGraph';

const mapStateToProps = state => ({
    isPlot: isPlotInit(state),
    data: activePlotData(state)
});

class DateChart extends React.PureComponent {
    static mapCharts = {
        PM10: LineGraph
    };

    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({})),
        isPlot: PropTypes.bool
    };

    render() {
        return this.props.isPlot ? <LineGraph data={this.props.data} /> : null;
    }
}

export default connect(mapStateToProps)(DateChart);
