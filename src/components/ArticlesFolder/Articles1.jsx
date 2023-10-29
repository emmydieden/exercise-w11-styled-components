import { ArticleCard1 } from "./ArticleCard1";
import styled from "styled-components";

const ArticleSection =  styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
`

const H2 = styled.h2`
    display: flex;
    justify-content: center;
`

export const Articles1 = () => {
  return (
    <>
    <H2>Recent Articles</H2>
    <ArticleSection>
        <ArticleCard1 />
    </ArticleSection>
    </>
  );
};