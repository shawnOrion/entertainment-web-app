import styled from 'styled-components'
import React from 'react';
import SearchIcon from '/assets/icon-search.svg'

const Container = styled.div`
    display: flex;
    width: 100%;

    & input {
        border: 0;
        width: 100%;
    }
`

export default function Search(props){
    const {searchTerm, onChange} = props;

    return (
        <Container>
            <img src={SearchIcon} alt='search-icon'/>
            <input type='text' value={searchTerm} onChange={onChange} placeholder='Search for movies or TV series'/>
        </Container>
    )
}