import React, { FC } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const StyledTitle = styled.h1`
  color: red;
`;

const Index: FC<{ data: any }> = ({ data }) => (
  <>
    <Helmet title="foo" defer={false} />
    <StyledTitle>test</StyledTitle>
    <Img fixed={data.file.childImageSharp.fixed} />
  </>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "150.png" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Index;
