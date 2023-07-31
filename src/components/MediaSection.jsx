import styled from "styled-components"
import Media from "./Media.jsx"

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

export default function MediaSection(props){
    const {media, category, title, onlyBookmarks, searchTerm} = props;
    //  filter the media based on the category
    let filteredMedia = [...media];
    if (category){
        filteredMedia = filteredMedia.filter(x => x.category == category);
    }
    if (onlyBookmarks){
        filteredMedia = filteredMedia.filter(x => x.isBookmarked)
    }
    if (searchTerm !== ''){
        // apply the search term to different properties of data
        let mediaByTitle = filteredMedia.filter(x => x.title.toLowerCase().includes(searchTerm.toLowerCase()))
        let mediaByYear = filteredMedia.filter(x => x.year.toString().includes(searchTerm));
        let mediaByRating = filteredMedia.filter(x => x.rating.toLowerCase().includes(searchTerm.toLowerCase()))
        // remove any duplicates
        let mediaSet = new Set([...mediaByTitle, ...mediaByYear, ...mediaByRating])
        filteredMedia = Array.from(mediaSet)
    }

    return (
      <Container>
        <h2>{title}</h2>
        <Section>
            {filteredMedia.map((x,idx) => (
                <Media key={idx} title={x.title} thumbnail={x.thumbnail} year={x.year} category={x.category} rating={x.rating} isBookmarked={x.isBookmarked}/>
            ))}
        </Section>
      </Container>
    )
}