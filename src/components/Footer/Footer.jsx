import assets from "../../assets/images-videos.json";
import styled from "styled-components";

const FooterSection = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5em;

    img {
        width: 20%;
        margin-bottom: 2em;
    }

    p {
        margin: 0;
    }
`

export const Footer = () => {
  return (
    <FooterSection>
      <img src={assets.logo} alt="Logo" />
      <p>Technigo Education Team</p>
      <p>October 29, 2023</p>
    </FooterSection>
  );
};
