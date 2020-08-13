import React from 'react';
import '../Footer/index.css'
import Fecha from '../Fecha'
import Boton from '../Boton'

const Footer = ( {texto, fecha} ) => {
    //const { texto, fecha } = props
    return(
        <footer className="App-Footer">
            <h2>{ texto }</h2>
            <Fecha fecha={fecha} />
            <Boton caption="Contactanos"/>
        </footer>
    )
}

export default Footer;
