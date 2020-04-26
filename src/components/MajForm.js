import React from 'react'

const MajForm = ({
    id: key,
    majSerie,
    series,
    supprimerSerie
}) => {

    const serie = series[key]
    

    const handleChange = (event, key) => {
        const {name, value} = event.target
        const serie = series[key]
        serie[name] = value
        
        majSerie(key, serie)
        

        
    }
    
    return (
        <div className='maj-serie'>
            <form  >
                    <input value={serie.nom} onChange={e => handleChange(e,key)} type="text" placeholder="Nom de la série" name="nom" />
                    <input value={serie.saison} onChange={e => handleChange(e,key)} type="text" placeholder="Numéro de la saison" name="saison" />
                    <input value={serie.episode}  onChange={e => handleChange(e,key)} type="text" placeholder="Numéro de l'épisode" name="episode" />
                    
                </form>
                
                <button onClick={() => supprimerSerie(key)} >Supprimer</button>
        </div>
    )
}

export default MajForm