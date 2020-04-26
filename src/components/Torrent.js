import React, { Component } from 'react'


class Torrent extends Component {
    state = {
        pseudo : this.props.match.params.pseudo

    }
    render () {
        console.log(this.props);
        return (
            <div>
              
                <h1>Page des torrents de {this.state.pseudo}</h1>
            </div>
        )
    }
}

export default Torrent