import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 280px;
    height: 225px;

    & img{
        width: 100%;
        height: 175px;
        flex-shrink: 0;
    }

    & ul{
        list-style: none;
        display: flex;
        gap: 20px;
        justify-content: start;
    }

    & h2{
        font-size: 1.5rem;
    }

    @media (max-width: 375px){
        width: 164px;
        height: 170px;

        img {
            height: 110px;
        }

        li{
            font-size: 11px;
        }

        h2{
            font-size: 14px;
        }
    }
`

export default function Media({ title, thumbnail, year, category, rating, isBookmarked }) {
    return (
        <Container>
            <div className='image-wrapper'>
                <img src={thumbnail.regular.small} alt='thumbnail'/>
            </div>
            <ul className='details'>
                <li>{year}</li>
                <li>{category}</li>
                <li>{rating}</li>
            </ul>
            <h2 className='title'>{title}</h2>
        </Container>
    )
}
