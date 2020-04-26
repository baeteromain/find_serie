import React, { Component } from 'react'
import SerieCard from './SerieCard';
import GetTorrent from './GetTorrent';




class Serie extends Component {
    state = {
        pseudo : this.props.match.params.pseudo,
        series : this.props.location.state.series
    }

  


    render () {

        const cards = Object.keys(this.state.series)
    .map( key => <SerieCard key={key} details={this.state.series[key]} />)
        return (
            <div>
                <h1>Page des séries de {this.state.pseudo}</h1>
                
                {cards}

                <GetTorrent />
                
                
                
            </div>
        )
    }
}

export default Serie