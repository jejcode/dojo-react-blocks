import React from 'react'

const Main = (props) => {
    return (
        <div className="col me-4" style={{background: '#e06666'}}>{ props.children }</div>
    )
}

export default Main