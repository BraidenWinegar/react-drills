import React, {useState} from 'react'

const Longin = props =>{

    return(
        //onChange={e => this.props.update(e.target.value)}
        <div>  
            <input type='text' onChange={e => props.updateName(e.target.value)}/>
            <input type='text' onChange={e => props.updatePassword(e.target.value)}/>
            <button onClick={() => alert(`Username: ${props.name} Password: ${props.password}`) }>Login</button>
        </div> 
    )

}
export default Longin;
