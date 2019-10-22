import React, {useState} from 'react'

 const Editor = props => {
    let theDisplay = props.list.filter(e => {
        return e.includes(props.textIn)})
        .map(e =>  (<h2>{e}</h2>));
    
    return(
        <div>
            <input onChange={(e) => {props.update(e.target.value)}} />
            {theDisplay}
        </div>
    )
}

export default Editor