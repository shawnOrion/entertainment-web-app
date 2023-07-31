import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom"
import data from './data.json'
import Navbar from './components/Navbar.jsx'
import MediaSection from './components/MediaSection.jsx'
import Search from './components/Search.jsx'
import {GlobalStyle} from "./Theme.js"
import styled from "styled-components"

const Container = styled.div`
  width: calc(100% - 128px);
  margin-left: 128px;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 375px){
    margin-top: 100px;
    margin-left: 0px;
    width: 100%;
    height: calc(100% - 100px);
  }
`

function App() {
  const [media, setMedia] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  // load the local dataset
  useEffect(() => {
    setMedia(data);
  }, [])  

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
  <BrowserRouter>
    <GlobalStyle/>
    <Navbar/>
    <Container>
      <Search searchTerm={searchTerm} onChange={handleSearchChange}/>
      <Routes>
        <Route path='/' element={<MediaSection media={media} onlyBookmarks={false} title={'Reccomended now'} searchTerm={searchTerm}/>} />
        <Route path='/movies' element={<MediaSection media={media} onlyBookmarks={false} category={'Movie'} title={'Movies'}searchTerm={searchTerm}/>}/>
        <Route path='/tv' element={<MediaSection media={media} onlyBookmarks={false} category={'TV Series'} title={'TV Series'}searchTerm={searchTerm}/>}/>
        <Route path='/bookmarks'  element={<MediaSection media={media} onlyBookmarks={true} title={'Bookmarks'}searchTerm={searchTerm}/>}/>
      </Routes>
    </Container>
  </BrowserRouter>)
  //  create routes
}

export default App
