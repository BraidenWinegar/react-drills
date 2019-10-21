import React, {Component} from 'react'

export default class TexBoxAndWords extends Component{
    // constructor(){
    //     super();
    //     this.state{
    //         soer: asd
    //     }
    // }

    render(){
        return(
            <div onChange={(e) => this.props.update(e.target.value)}>
                <input type='text' />
                <p>{this.props.val}</p>
            </div>
        )
    }
}



