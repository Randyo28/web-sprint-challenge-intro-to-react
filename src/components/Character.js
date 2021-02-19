// Write your Character component here
import React from 'react';
import CharacterInfo from './CharacterInfo';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    /* background: rgba(0, 0, 0, 0.1); */
    width: 75%;
    display: inline-block;
`

const Characters = (props) => {

const {characters} = props;

    return(
            <ContainerDiv>
                {characters.map(character => {
                return <CharacterInfo character={character}/>
                })}
            </ContainerDiv>
        )
}

export default Characters