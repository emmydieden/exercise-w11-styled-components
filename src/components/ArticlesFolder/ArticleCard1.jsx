import assets from "../../assets/images-videos.json";
import styled from "styled-components";

const Article = styled.article`
    height: 280px;
    position: relative;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 1em;
            z-index: 1;
        }
        div {
            z-index: 2;
            color: white;
            position: absolute;
            bottom: 0;
            padding: 30px 20px 20px 20px;
        }
`

export const ArticleCard1 = () => {
  // Filter keys that match the pattern "article-img-__"
  const articleImageKeys = Object.keys(assets).filter(key =>
    key.startsWith("article-img-")
  );

  return (
    <>
      {articleImageKeys.map(key => (
        <Article key={key}>
          <img src={assets[key]} alt={`Image of ${key}`} />
          <div>
            <h3>{key}</h3>
            <p>July 1, 2024</p>
          </div>
        </Article>
      ))}
    </>
  );
};
