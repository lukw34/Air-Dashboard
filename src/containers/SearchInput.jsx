import React from 'react';
import SearchInputComp from '../components/SearchInput';

class SearchInput extends React.Component {
    state = {
        data: []
    };

    componentDidMount() {
        this.fetchStation();
    }

    onChange = (event, index, value) => {
        console.log(value);
    };

    fetchStation = () => {
        fetch('/pjp-api/rest/station/findAll')
            .then(resp => resp.json())
            .then(body => this.setState({
                data: body.map(({id: value, stationName: primaryText}) => ({value, primaryText}))
            }))
            .catch(() => this.setState({
                data: []
            }));
    };

    render() {
        const {data} = this.state;
        const props = {
            onChange: this.onChange,
            data
        };

        return <SearchInputComp {...props} />;
    }
}


export default SearchInput;