import React, {Component} from 'react'

export default class Longin extends Component{



    handelLogin = () => {
        alert(`Username: ${this.props.name} Password: ${this.props.password}`)
    }

    render(){

        return(
            //onChange={e => this.props.update(e.target.value)}
            <div>  
                <input type='text' onChange={e => this.props.updateName(e.target.value)}/>
                <input type='text' onChange={e => this.props.updatePassword(e.target.value)}/>
                <button onClick={this.handelLogin}>Login</button>
            </div> 
        )
    }
}
