import React, {Component} from "react";

export default class WeatherList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <th>City</th>
                        <th>Temp</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </thead>
                    <tbody>
                        <tr>
                            <tb>
                                </tb>
                                </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}