import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import InfoBar from '../components/InfoBar';
import {isPlotInit, activePlotData, isLoaderSelector} from '../selectors/plot.selectors';
import {selectActiveSensorTitle} from '../selectors/sensors.selectors';
import LineGraph from '../components/LineGraph';
import Loader from '../components/Loader';

const mapStateToProps = state => ({
    isPlot: isPlotInit(state),
    data: activePlotData(state),
    isLoader: isLoaderSelector(state),
    title: selectActiveSensorTitle(state)
});

class DateChart extends React.PureComponent {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({})),
        isPlot: PropTypes.bool,
        isLoader: PropTypes.bool,
        title: PropTypes.string
    };

    renderChart = () => {
        const {isLoader, data, title} = this.props;
        return isLoader ? <Loader /> : <LineGraph title={title} data={data} />;
    };

    render() {
        const {isPlot} = this.props;
        return isPlot ? this.renderChart() : (<InfoBar
            text="Select station to see chart..."
        />);
    }
}

export default connect(mapStateToProps)(DateChart);
