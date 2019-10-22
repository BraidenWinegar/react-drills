import React, {useState} from 'react'

 const List = (props) => {
    return(
        <div>
            <h2>{props.foods[0]}</h2>
            <h2>{props.foods[1]}</h2>
            <h2>{props.foods[2]}</h2>
            <h2>{props.foods[3]}</h2>
            <h2>{props.foods[4]}</h2>
            <h2>{props.foods[5]}</h2>
            <h2>{props.foods[6]}</h2>
            <h2>{props.foods[7]}</h2>
        </div>
    )
}

export default List;