import assets from "../../assets/images-videos.json"
import styled from "styled-components"

const VideoSection = styled.section`
  margin: 1rem 0 0 0;
  height: 800px;
  iframe {
      height: 100%; 
      width: 100%; 
    }
`

export const Video = () => {
  return (
    <VideoSection>
            <iframe src={assets.youtubeVideo}></iframe>
      {/* <video controls>
        <source src={assets.youtubeVideo} type="video/mp4" />
        <source src={assets.youtubeVideo} type="video/ogg"/>
      </video> */}
    </VideoSection>
  )
}
