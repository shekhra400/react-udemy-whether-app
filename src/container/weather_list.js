import React, {Component} from "react";
import {connect} from "react-redux";

class WeatherList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temp</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        weatherData: state.weatherData
    };
}
export default connect(mapStateToProps)(WeatherList);