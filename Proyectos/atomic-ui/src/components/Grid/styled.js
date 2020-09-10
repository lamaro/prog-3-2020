import styled from 'styled-components'

const GridContainer = styled.div`
    display: grid;
    grid-template-columns:repeat(12, 1fr);
    grid-column-gap: ${props => props.colGap || 30}px;
    grid-row-gap: ${props => props.rowGap || 40}px;
`

const ColContainer = styled.div`
    grid-column: span ${props => props.desktop || 12};
    @media (max-width: 768px) {
        grid-column: span ${props => props.tablet || '12'};
    }
    @media (max-width: 480px) {
        grid-column: span ${props => props.mobile || '12'};
    }
`

export { GridContainer, ColContainer }


