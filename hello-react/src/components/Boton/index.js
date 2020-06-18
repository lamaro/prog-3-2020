import React from 'react'
import './index.css'

const Boton = props => {
    const { caption } = props
    const handleClick = (event) => console.log('clicked',event)

    return (
        <button
            onClick={handleClick}
        >
            {caption || 'A completar'}
        </button>
    )
}

export default Boton


// V && V  = V
// V && F = F
// F && V = F
// F && F = F

// V || V = V
// V || F = V
// F || V = V
// F || F = F