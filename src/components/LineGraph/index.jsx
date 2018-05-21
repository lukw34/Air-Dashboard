import React from 'react';
import PropTypes from 'prop-types';

import {extent as d3ArrayExtent} from 'd3-array';
import {
    scaleLinear as d3ScaleLinear,
    scaleTime as d3ScaleTime,
} from 'd3-scale';
import {line as d3Line} from 'd3-shape';
import {
    axisBottom as d3AxisBottom,
    axisLeft as d3AxisLeft,
} from 'd3-axis';
import {select as d3Select} from 'd3-selection';

import './LineGraph.scss';

class LineGraph extends React.PureComponent {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({
            date: PropTypes.string,
            value: PropTypes.number
        })),
        title: PropTypes.string
    };

    static defaultProps = {
        data: []
    };

    static selectX = ({date}) => new Date(date);

    static selectY = ({value}) => value;


    getXAxis = () => d3AxisBottom()
        .scale(this.getXScale())
        .ticks(this.props.data.length / 2);

    getYAxis = () => d3AxisLeft()
        .scale(this.getYScale())
        .ticks(3);

    getYScale = () => d3ScaleLinear()
        .domain(d3ArrayExtent(this.props.data, LineGraph.selectY))
        .range([250, 0]);

    getXScale = () => d3ScaleTime()
        .domain(d3ArrayExtent(this.props.data, LineGraph.selectX))
        .range([0, 500]);

    getPath = () => {
        const {data} = this.props;
        const selectScaledX = datum => this.getXScale()(LineGraph.selectX(datum));
        const selectScaledY = datum => this.getYScale()(LineGraph.selectY(datum));
        const sparkLine = d3Line()
            .x(selectScaledX)
            .y(selectScaledY);
        return sparkLine(data);
    };

    render() {
        const {data, title} = this.props;
        return (
            <div className="LineGraph">
                <div className="title">
                    {title}
                </div>
                <svg
                    className="graph"
                >
                    <g
                        className="xAxis"
                        ref={node => d3Select(node)
                            .call(this.getXAxis())}
                    />
                    <g
                        className="yAxis"
                        ref={node => d3Select(node)
                            .call(this.getYAxis())}
                    />
                    <g className="line">
                        <path
                            d={this.getPath()}
                        />
                    </g>
                    <g className="scatter">
                        {data.map((datum) => {
                            const x = this.getXScale()(LineGraph.selectX(datum));
                            const y = this.getYScale()(LineGraph.selectY(datum));
                            return (
                                <circle
                                    cx={x}
                                    cy={y}
                                    key={`${x},${y}`}
                                    r={4}
                                />
                            );
                        })}
                    </g>
                </svg>
            </div>
        );
    }
}

export default LineGraph;