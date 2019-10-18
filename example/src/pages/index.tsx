import React, { FC } from "react"
import styled from "styled-components"
import Helmet from "react-helmet"

const StyledTitle = styled.h1`
  color: red;
`
const Index: FC<{data: any}> = ({data}) => (
  <>
    <Helmet title="foo" defer={false} />
    <StyledTitle>test</StyledTitle>
  </>
)

export default Index