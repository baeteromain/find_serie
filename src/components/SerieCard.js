import React from 'react'
import { Card} from 'react-bootstrap'


const SerieCard = ({ details }) => {
    const nom = details.nom
    const saison = details.saison
    const episode = details.episode
    const description = `Saison n°${saison} épisode n°${episode}`

    return (
        <Card border="secondary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("../Img/series.jpg")} />
            <Card.Body>
                <Card.Title>{ nom }</Card.Title>
                <Card.Text>
                { description }
                </Card.Text>
                <button>Modifier</button>
                <button>Supprimer</button>
            </Card.Body>
        </Card>
    )
}

export default SerieCard