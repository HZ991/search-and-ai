import React from 'react'
// import './blockLink.css'

function BlockLink ({text}) {
    return (
        <div 
            style={{
                border: '1px solid white',
                backgroundColor: 'grey',
                // width: "30%",
                maxWidth: '30%',
                padding: '4px',
                margin: '8px',
                fontSize :'12px',
                color : 'white'
            }}
        >
            {text}
        </div>
    )
}

export default BlockLink;