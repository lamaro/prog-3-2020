import React from 'react';
import '../App/index.css';
import Header from '../Header'
import Footer from '../Footer'
import Wrapper from '../Wrapper'

function App() {
    //funciones propias
  return (
    <div className="App">
        <Header />
        <Wrapper />
        <Footer texto="Este es mi footer horrible" fecha="11/06/2020" />
    </div>
  );
}

export default App;
