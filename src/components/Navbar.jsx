//  create links
import {Link} from "react-router-dom"
import styled from "styled-components"

const Container = styled.nav`
    background-color: #eee;
    color: #000;
    position: fixed;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    & ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: center;
        justify-content: start;


    }

    @media (max-width: 375px){
        height: 72px;
        width: calc(100% - 48px);
        top: 24px;
        left: 24px;
        translateX: (-24px);
        justify-content: center;

        & ul{

            flex-direction: row;
            gap: 20px;
            justify-content: center;

        }
    }
`

//  get icons
export default function Navbar(props){
    return (
    <Container>
        <ul>
            <li>
                <Link to='/' >Home</Link>
            </li>
            
            <li>
                <Link to='/movies' >Movies</Link>
            </li>
            
            <li>
                <Link to='/tv' >TV</Link>
            </li>
            
            <li>
                <Link to='/bookmarks' >Bookmarks</Link>
            </li>
            
        </ul>
    </Container>
    )
}