import React from 'react';

const CharacterInfo = (props) => {

const {character} = props;

    return(
        <>
            <div className="inner-container">
                <h1>{character.name}</h1>
                <h5>Height: {character.height}</h5>
                <h5>Weight: {character.mass}</h5>
                <h5>Hair-color: {character.hair_color}</h5>
                <h5>Skin-color: {character.skin_color}</h5>
                <h5>Eye-color: {character.eye_color}</h5>
                <h5>Birth: {character.birth_year}</h5>
                <h5>Gender: {character.gender}</h5>
            </div>
            <div className="break"></div>
    </>
        )
}

export default CharacterInfo