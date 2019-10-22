import React, { useState} from 'react'

 const TexBoxAndWords = props => {
    return(
        <div onChange={(e) => props.update(e.target.value)}>
            <input type='text' />
            <p>{props.val}</p>
        </div>
    )
}


export default TexBoxAndWords
