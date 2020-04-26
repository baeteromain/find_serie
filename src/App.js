import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AjouterSerie from './components/AjouterSerie';
import MajSerie from './components/MajSerie';

import { Redirect } from 'react-router-dom'




import React, { Component } from 'react'

//Firebase

import base from './base'


class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    series: {},
    redirect: false,
    majSerie: false,
  }

  componentDidMount(){
    this.ref = base.syncState(`/${this.state.pseudo}/series`, {
      context: this,
      state: 'series'
    })
  }

  componentWillUnmount(){
    base.removeBinding(this.ref)
  }

  //**FUNCTIONS**\\

  
  ajouterSerie = serie => {
    const series = { ...this.state.series}
    series[`serie-${Date.now()}`] = serie
    this.setState({ series })
  }

  majSerie = (key, newSerie) => {
    const series = { ...this.state.series}
    series[key] = newSerie
    this.setState({ series })
  }

  supprimerSerie = key => {
    const series = { ...this.state.series}
    series[key] = null
    this.setState({ series })
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect push to={{pathname :`/pseudo/${this.state.pseudo}/serie`,
    state : {series : this.state.series}} }  />
    }
  }
  setMaj = () => {
    this.setState({
      majSerie: true
    })
  }
  renderMaj = () => {
    if(this.state.majSerie){
      return  <MajSerie majSerie={this.majSerie} series={this.state.series} supprimerSerie={this.supprimerSerie} />
    }
  }

  render () {

  
    // // Create Cards 
    // const cards = Object.keys(this.state.series)
    // .map( key => <SerieCard key={key} details={this.state.series[key]} />)

    
    
    return (
        <div>
          
          <h1>Bonjour {this.props.match.params.pseudo}, bienvenue dans ta boite à séries</h1>
          
          <AjouterSerie ajouterSerie={this.ajouterSerie} />
          {this.renderRedirect()}
          {this.renderMaj()}
         
         <button onClick={this.setMaj}>Mettre à jour vos Séries</button>
          <div>
           <button onClick={this.setRedirect}>Vos séries</button>
           </div>
           
            
         
          
        
         </div>
    )
  }
}

export default App