import React from 'react'
import Container from './styled'

const Div = ({ children, ...props }) => {

    return (
        <Container margin={props.margin}>
            {children}
        </Container>
    )
}

export default Div