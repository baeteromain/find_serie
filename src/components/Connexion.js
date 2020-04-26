import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import React, { Component } from 'react'


class Connexion extends Component {
    state = {
        pseudo:'',
        goToApp: false
    }

    goToApp = event => {
        event.preventDefault()
        this.setState({ goToApp: true})
    }

    handleChange = event => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }
    
    render () {
        if (this.state.goToApp) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
          }
        return (
            <div className='connexion-box'> 
                <Form className="connexion" onSubmit={this.goToApp} >
                    <h1>Find séries</h1>
                    <Form.Group > 
                    <Form.Control type="text"  placeholder="Login" onChange={this.handleChange}
                    value={this.state.pseudo} />
                     <Button variant="warning" type='submit'>Go</Button>
                     </Form.Group>
                 </Form>
            </div>
        )
    }
}

export default Connexion
