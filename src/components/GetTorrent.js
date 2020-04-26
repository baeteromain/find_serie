import React, { Component } from 'react'

import axios from 'axios';

class GetTorrent extends Component {

    state = {
        torrent: '',
        search:''

    }

    handleClick = () => {
        axios.get('/gettorrent').then( response => {
            
            const filtreTexte = (arr, requete) => { 
                return arr.filter(el =>  el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
              }
              const filtre = filtreTexte(response.data, `${this.state.search}`)
            this.setState({torrent: filtre})
        })
    }

    handleChange = (event) => {
        const search = event.target.value
        this.setState({search})
    }
    


    render () {
        return (
            <div>
                
                <input onChange={this.handleChange} type="text"/>
                
                
                <button onClick={this.handleClick}>Get the torrent's</button>
                
                <div>
                    <table>
                        <caption>Torrents</caption>
                            <thead>
                                <tr>
                                <th>Noms et Liens</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.torrent}</td>                          
                                </tr>
                        </tbody>
                        </table>
                    
                </div>
                
            </div>
        )
    }
}

export default GetTorrent