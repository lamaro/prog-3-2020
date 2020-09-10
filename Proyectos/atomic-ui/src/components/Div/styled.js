import styled from 'styled-components'

const Container = styled.div`
    padding: 10px 20px;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    margin-top:${props => props.margin || 10 }px;

    .highlight{
        background-color:#ffff00;
        padding:20px 10px;
    }
`

export default Container