import styled from 'styled-components'
import { motion } from 'framer-motion' 

const Container = styled(motion.button)`
    background-color: ${ props => props.primary ? '#453234' : '#eeeeee' };
    border: 1px solid #000000;
    color:${ props => props.primary ? '#ffffff' : '#000000' };
    padding:20px 20px;
    margin-top:20px;
    :hover{opacity:0.6;}
`

export default Container