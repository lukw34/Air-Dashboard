import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SearchInputComp from '../components/SearchInput';
import {initStation} from '../actions/sensors.actions';

const mapStateToProps = ({sensors: {stationId}}) => ({
    stationId
});

const mapDispatchToProps = dispatch => ({
    getSensors: stationId => dispatch(initStation(stationId))
});

class SearchInput extends React.Component {
    static propTypes = {
        getSensors: PropTypes.func,
        stationId: PropTypes.string
    };

    state = {
        data: []
    };

    componentDidMount() {
        this.fetchStation();
    }

    onChange = (_, __, value) => {
        this.props.getSensors(value);
    };

    fetchStation = async () => {
        try {
            const resp = await fetch('/pjp-api/rest/station/findAll');
            const body = await resp.json();
            this.setState({
                data: body.map(({id, stationName: primaryText}) => ({value: id.toString(), primaryText}))
            });
        } catch (e) {
            this.setState({
                data: []
            });
        }
    };

    render() {
        const {data} = this.state;
        const {stationId} = this.props;
        const props = {
            onChange: this.onChange,
            data,
            value: stationId
        };

        return <SearchInputComp {...props} />;
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);