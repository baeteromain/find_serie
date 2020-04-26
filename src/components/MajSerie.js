import React, { Component } from 'react'
import MajForm from './MajForm';

class MajSerie extends Component {
    render () {
        return (
            <div>
                
                {Object.keys(this.props.series)
                .map(key => < MajForm key={key} id={key} majSerie={this.props.majSerie} series={this.props.series} supprimerSerie={this.props.supprimerSerie} />)}
            </div>
        )
    }
}

export default MajSerie