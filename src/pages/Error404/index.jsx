import React from "react"
import Error404Image from "../../assets/images/dribbble_1.gif"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { colors } from "../../utils/style/colors"

const StyledError404 = styled.section`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledImage = styled.img`
  height: 400px;
  object-fit: cover;
`

const StyledTitle = styled.h2`
  font-size: 60px;
  margin: 0;
`
const StyledSubtitle = styled.h3`
  font-size: 40px;
  margin: 0;
`

const StyledText = styled.p`
  font-size: 25px;
`

const StyledSubdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledLink = styled(Link)`
  background-color: ${colors.accent2};
  font-size: 25px;
  color: #fcfcfc;
  padding: 15px;
  border-radius: 50px;
  text-decoration: none;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`

function Error404() {
  return (
    <StyledError404>
      <StyledTitle>404</StyledTitle>

      <StyledImage src={Error404Image} />

      <StyledSubdiv>
        <StyledSubtitle>J'ai l'impression que tu es perdu !</StyledSubtitle>
        <StyledText>La page que tu cherche n'existe pas 😭</StyledText>
        <StyledLink to='/'>🏡 Retour à la maison 🏡</StyledLink>
      </StyledSubdiv>
    </StyledError404>
  )
}

export default Error404
