import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import Noticias from '../Noticias';
import Formulario from '../Formulario';

class App extends Component {

  constructor( props ) {
    super(props);
    this.state= {
      noticias: [],
      categoria:'general'
    }

  }
  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = ( categoria = 'general' ) => {
    this.setState({
      categoria: categoria
    })
    
    let url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=1976374f9d1446b290be434e147ea4de`;
console.log(url);

    let myInit = {
      method:'GET'
    }
    fetch(url, myInit)
    .then(response => response.json())
    .then( noticias => {
      console.log(noticias);
      this.setState({
        noticias: noticias.articles
      })
    })
    .catch( err=> console.error(err))
  }
  render() {
    return (
      <div className="contenedor-app">
        <Header titulo="Noticias"/>
        <div className="container white contenedor-noticias">
          <Formulario 
            consultarNoticias={this.consultarNoticias}/>
          <Noticias 
            noticias={this.state.noticias}
            />
        </div>
      </div>
    );
  }
}

export default App;
