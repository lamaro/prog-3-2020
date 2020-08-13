import React from 'react';
import '../App/index.css';
import Header from '../Header'
import Footer from '../Footer'
import Wrapper from '../Wrapper'

// function App() {
//     //funciones propias
//   return (
//     <div className="App">
//         <Header />
//         <Wrapper />
//         <Footer texto="Este es mi footer horrible" fecha="11/06/2020" />
//     </div>
//   );
// }

class App extends React.Component {
    constructor(props) {
        super(props)
        console.log('Se ejecutó el constructor')
        //INICIALIZAR STATE
        this.state = {
            date: new Date(),
            nameAlumno: ""
        };
    }

    componentDidMount() {
        console.log("Se ejecutó el CDM")
        //FETCH DE DATA
        this.setState({ nameAlumno: "Robert" })
    }

    handleButtonClick() {
        console.log('cliiii')
    }

    render() {
        //MOSTRAR DATA EN HTML 
        //SE EJECUTA AL INICIO Y CADA VEZ QUE CAMBIA EL STATE
        console.log('Se ejecutó el metodo render')
        return (
            <div className="App">
                <Header />
                <Wrapper />
                <Footer texto="Este es mi footer horrible" fecha={this.state.date} />
            </div>)
    }
}

export default App;


