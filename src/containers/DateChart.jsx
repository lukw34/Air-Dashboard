import React from 'react';

import LineGraph from '../components/LineGraph';

class DateChart extends React.Component {
    static mapCharts = {
        PM10: LineGraph
    };

    render() {
        const data = [
            { date: '2017-04-18', value: '2.8' },
            { date: '2017-04-19', value: '2.9' },
            { date: '2017-04-20', value: '2.7' },
            { date: '2017-04-21', value: '4.3' },
            { date: '2017-04-22', value: '4.6' },
            { date: '2017-04-23', value: '5' },
            { date: '2017-04-24', value: '5.2' },
            { date: '2017-04-25', value: '5.1' },
            { date: '2017-04-26', value: '4.8' },
            { date: '2017-04-27', value: '4.9' },
            { date: '2017-04-28', value: '5.1' },
            { date: '2017-04-29', value: '5.3' },
            { date: '2017-04-30', value: '5.6' },
            { date: '2017-05-01', value: '6.2' }
        ];
        return <LineGraph data={data} />;
    }
}

export default DateChart;
