import imagesVideos from "../../assets/images-videos.json"
import styled from "styled-components"

const HeroSection = styled.section`
    background-image: url(${imagesVideos.heroImage});
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    height: 460px; 
    display: flex;
    justify-content: center;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      img {
        max-width: 60%;
        margin-bottom: 2rem;
      }
      h1 {
        font-weight: 700; 
      }
`

export const Hero = () => {
  return (
    <HeroSection id="hero">
      <div className="hero-inner-container">
        <img src={imagesVideos.logo}/>
        <h1>Discover Electronic Music and Events</h1>
        <p>Read our latest articles </p>
      </div>
    </HeroSection>
    
  )
}
