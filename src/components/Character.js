// Write your Character component here
import React from 'react';
import CharacterInfo from './CharacterInfo';
import styled, {keyframes} from 'styled-components';

const kf = keyframes`
    from {
        opacity: 0;
        transform: translateX(200px);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
`

const ContainerDiv = styled.div`
    /* background: rgba(0, 0, 0, 0.1); */
    width: 75%;
    display: inline-block;
    animation: ${kf} 1s ease-in;
    margin-bottom: 30px;
`

const Characters = (props) => {

const {characters} = props;

    return(
            <ContainerDiv>
                {characters.map(character => {
                return <CharacterInfo  key={character.mass} character={character}/>
                })}
            </ContainerDiv>
        )
}

export default Characters