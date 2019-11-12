import React, { FC } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const StyledTitle = styled.h1`
  color: red;
`;

const Index: FC = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "150.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <>
      <Helmet title="foo" defer={false} />
      <StyledTitle>test</StyledTitle>
      <Img fixed={data.file.childImageSharp.fixed} />
    </>
  );
};

export default Index;
