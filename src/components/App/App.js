import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import Noticias from '../Noticias';

class App extends Component {

  state= {
    noticias: []
  }
  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = () => {
    let url = 'https://newsapi.org/v2/top-headlines?country=mx&category=general&apiKey=1976374f9d1446b290be434e147ea4de';

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
          <Noticias 
            noticias={this.state.noticias}
            />
        </div>
      </div>
    );
  }
}

export default App;
