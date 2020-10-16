import { Container as MainContainer } from './styled'

const Main = ({children}) => {
    return (
        <MainContainer>
            {children}
        </MainContainer>
    )
}

export default Main