import React from "react"
import Logo from "../../assets/images/logo.webp"
import styled from "styled-components"
import { colors } from "../../utils/style/colors"
import { Link } from "react-router-dom"

const HeaderStyled = styled.header`
  background: linear-gradient(
    ${colors.headerBackground},
    ${colors.gradientColors}
  );
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 20px;
  padding-bottom: 40px;
`
const StyledProfilePicture = styled.img`
  width: auto;
  max-height: 100%;
  max-width: 100%;
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledLink = styled(Link)`
  color: ${colors.mainText};
  text-decoration: none;
  margin: 0 15px;
  font-size: 18px;
  font-weight: 700;
  &:hover {
    color: ${colors.accent1};
    transition: color 0.3s ease-in-out;
  }
`

const HeaderTitle = styled.h1`
  visibility: hidden;
`

function Header() {
  return (
    <HeaderStyled>
      <StyledProfilePicture src={Logo} alt='Profile' />
      <HeaderTitle>Gaëtan Redoutez</HeaderTitle>
      <StyledNav>
        <StyledLink to='/'>Accueil</StyledLink>
        <StyledLink to='/resume'>Mon parcours</StyledLink>
        <StyledLink to='/contact'>Contact</StyledLink>
        <StyledLink to='/WIP'>WIP</StyledLink>
      </StyledNav>
    </HeaderStyled>
  )
}

export default Header
