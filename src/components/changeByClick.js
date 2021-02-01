import React from 'react'

function changeByClick(props) {
    return (
        <div>
            <button onClick={props.handleName}>Click {props.name}</button>
        </div>
    )
}

export default changeByClick
