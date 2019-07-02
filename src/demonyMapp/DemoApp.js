import React from 'react';
import Demo from './Demo';
import CountrySelector from './CountrySelector';

export default class DemoApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            countries: [],
            selected: null
        }
    }

    componentDidMount() {
        fetch('http://country.register.gov.uk/records.json?page-size=5000')
        .then(response => {
            console.log('About to check for errors')
            if(!response.ok){
                console.log('lets throw an error')
                throw new Error('Something went wrong');
            } return response;
            })
        .then (response => response.json())
        .then(data => {
            const countries = Object.keys(data).map(key => data[key].item[0]);
            this.setState({
                countries
            });
        })
        .catch(err => {
            console.log('handling the error here', err)
            this.setState({
                error:err.message
            });
        });
    }
    
    setSelected(selected) {
        this.setState({
            selected
        });
    }
    
    render(){
        const demon = this.state.selected
                ?   <Demo name={this.state.selected['citizen-names']} country={this.state.selected.name}/>
                :   <div className='demo-placeholder'>Select a country from above!</div>
        const error = this.state.error
                ?   <div className='demo-app'>{this.state.error}</div>
                : '';
        return (
            <div className='demo-app'>
                {error}
                <CountrySelector countries={this.state.countries} changeHandler={selected => this.setSelected(selected)}/>
                {demon}
            </div>
        )
    }
}