import React from 'react'
import Container from './styled'

const Button = ({ children, ...props }) => {

    return (
        <Container 
        primary={props.primary}
        onClick={()=>console.log('Clicked')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
            {children}
        </Container>
    )
}

export default Button