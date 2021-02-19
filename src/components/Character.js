// Write your Character component here
import React from 'react';
import CharacterInfo from './CharacterInfo'

const Characters = (props) => {

const {characters} = props;

    return(
        <>
            <div className='container'>
                {characters.map(character => {
                return <CharacterInfo character={character}/>
                })}
            </div>
        </>
        )
}

export default Characters