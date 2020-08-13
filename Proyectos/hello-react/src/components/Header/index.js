import React from 'react'
import Boton from '../Boton'

const Header = props => {

    return (
        <header className="App-header">
            <p>
                Bienvenidos Alumnos de 3ro! the best of the best of the best! <br/>
                <Boton caption="Suscribite"/>
        </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
        </a>
        </header>
    )
}

export default Header