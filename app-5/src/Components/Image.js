import React, {Component} from 'react'

export default class Image extends Component{
    render(){
        return(
            <div>
                <img src={this.props.url} />
                <caption><p>Error 409 Conflict </p></caption>
            </div>
        )
    }
}