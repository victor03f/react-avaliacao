import React from 'react';
import Sessao from './componentes/Sessão';
import Galeria from './componentes/Galeria';
import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import About from './componentes/About';
import Cabecalho from './componentes/Cabecalho';
function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Header/>
      <About/>
      <Sessao/>
      <Galeria/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
