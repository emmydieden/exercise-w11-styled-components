import assets from "../../assets/images-videos.json";
import styled from "styled-components";

const HeaderSection = styled.header`
  display: flex;
  padding: 1em 2em;
  align-items: center;
  justify-content: space-between;
    img {
        margin-right: 20px; 
        max-width: 100px; 
    }

    ul {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 1.5rem;
        list-style: none;
    }
    
    nav {
      display: flex;
      align-items: center;
    }
`


export const Header = () => {
  return (
    <HeaderSection>
      <img src={assets.logo} alt="Logo" />
      <nav className="navbar">
        <ul>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Events</a></li>
        </ul>
      </nav>
      <button>Change language</button>
    </HeaderSection>
    
  )
}