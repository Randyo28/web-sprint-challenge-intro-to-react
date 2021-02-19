import React from 'react';
import styled from 'styled-components';

const InnerDiv = styled.div`
    background: rgba(0, 0, 0, 0.5);
    width: 70%;
    margin: 0px auto;
    padding: 5px;
    color: white;

    h1{
        color: ${props => props.theme.lukeColor};
        transition: ${props => props.theme.transtion2s};

        &:hover{
            color: ${props => props.theme.darkBlue};
            transition: ${props => props.theme.transtion2s};
        }
    }
`

const Break = styled.div`
    width: 40%;
    padding: 1px;
    margin: 0 auto;
    height: 0px;
`

const CharacterInfo = (props) => {

const {character} = props;

    return(
        <>
            <InnerDiv>
                <h1>{character.name}</h1>
                <h5>Height: {character.height}</h5>
                <h5>Weight: {character.mass}</h5>
                <h5>Hair-color: {character.hair_color}</h5>
                <h5>Skin-color: {character.skin_color}</h5>
                <h5>Eye-color: {character.eye_color}</h5>
                <h5>Birth: {character.birth_year}</h5>
                <h5>Gender: {character.gender}</h5>
            </InnerDiv>
            <Break></Break>
    </>
        )
}

export default CharacterInfo