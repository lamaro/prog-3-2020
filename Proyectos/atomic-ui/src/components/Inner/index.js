import React from 'react'
import {InnerContainer } from './styled'

const Inner = ({children, ...props}) => {
    return(
        <InnerContainer>
            {children}
        </InnerContainer>
    )
}

export { Inner }