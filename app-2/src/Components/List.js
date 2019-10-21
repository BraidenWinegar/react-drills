import React, {Component} from 'react'

export default class List extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.foods[0]}</h2>
                <h2>{this.props.foods[1]}</h2>
                <h2>{this.props.foods[2]}</h2>
                <h2>{this.props.foods[3]}</h2>
                <h2>{this.props.foods[4]}</h2>
                <h2>{this.props.foods[5]}</h2>
                <h2>{this.props.foods[6]}</h2>
                <h2>{this.props.foods[7]}</h2>
            </div>
        )
    }
}