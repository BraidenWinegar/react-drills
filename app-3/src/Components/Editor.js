import React, {Component} from 'react'

export default class Editor extends Component{
    render(){
        let theDisplay = this.props.list.filter(e => {
            return e.includes(this.props.textIn)})
            .map(e => {
                return <h2>{e}</h2>;
            });
        
            console.log(this.props.textIn)
        return(
            <div>
                <input onChange={(e) => {this.props.update(e.target.value)}} />
                {theDisplay}
            </div>
        )
    }
}