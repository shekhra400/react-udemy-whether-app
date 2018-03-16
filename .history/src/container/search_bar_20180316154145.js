import React,{Component} from "react";
import {connect} from "react-redux";
import { fetchWeather } from "../actions/index";
import { bindActionCreators } from "redux";

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term:''}
        this.onSearchChange = this.onSearchChange.bind(this);
        // this.props.fetchWeather = this.props.fetchWeather.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onSearchChange(e){
       this.setState({term:e.target.value})
        
    }
    onFormSubmit(e){
        e.preventDefault();
        this.props.fetchWeatherLocal(this.state.term);
        this.setState({term:""});
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit } className="input-group">
                <input
                className="form-control"
                placeholder="Search cities"
                value={this.state.term}
                onChange={this.onSearchChange}
                 />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}

function mapStateToProps(state){
    return {
        weatherData: state.weatherData
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( {fetchWeatherLocal: fetchWeather}, dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);