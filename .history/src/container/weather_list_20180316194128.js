import React, {Component} from "react";
import {connect} from "react-redux";

export default class WeatherList extends Component{
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
                            <td>aa
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}