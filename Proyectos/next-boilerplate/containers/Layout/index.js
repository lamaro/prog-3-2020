import { Main } from 'containers'
import { Header } from 'components'

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <Main>
                {children}
            </Main>
            {/* footer */}
        </div>
    )
}

export default Layout