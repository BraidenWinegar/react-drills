import React from 'react'

export default function Image (props) {
    return(
        <div>
            <img src={props.url} />
            <caption><p>Error 409 Conflict </p></caption>
        </div>
    )
}