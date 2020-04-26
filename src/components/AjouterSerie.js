import React, { Component } from 'react'

class AjouterSerie extends Component {
    state = {
        nom:'',
        saison:'',
        episode:''
    }
    
    handleChange = event => {
        const { name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
        const serie = { ...this.state}
        this.props.ajouterSerie(serie)
        
        this.setState({ ...serie })
        alert('Série ajoutée')
        //Reset
        //const serieadd = { ...this.state}
        
        Object.keys(serie).forEach(item =>{ 
            serie[item] = ''
        })
        this.setState({ ...serie })
    }
    render () {
        return (
            <div className='add-serie'>
                <form onSubmit={this.handleSubmit} >
                    <input value={this.state.nom} type="text" placeholder="Nom de la série" name="nom" onChange={this.handleChange}/>
                    <input value={this.state.saison} type="text" placeholder="Numéro de la saison" name="saison" onChange={this.handleChange}/>
                    <input value={this.state.episode} type="text" placeholder="Numéro de l'épisode" name="episode" onChange={this.handleChange}/>
                    <button type='submit'>+ Ajouter une série</button>
                </form>
            </div>
        )
    }
}

export default AjouterSerie
