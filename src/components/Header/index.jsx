import React from "react"
import Logo from "../../assets/images/logo.webp"
import styled from "styled-components"
import { colors } from "../../utils/style/colors"
import { Link } from "react-router-dom"

const HeaderStyled = styled.header`
  background-color: ${colors.headerBackground};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 10px;
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
  font-size: 16px;
  &:hover {
    color: ${colors.accent1};
    transition: color 0.3s ease-in-out;
  }
`

// const HeaderText = styled.h1`
//   color: ${colors.mainText};
// `

function Header() {
  return (
    <HeaderStyled>
      <StyledProfilePicture src={Logo} alt='Profile' />
      {/* <HeaderText>Gaëtan Redoutez</HeaderText> */}
      <StyledNav>
        <StyledLink to='/'>Accueil</StyledLink>
        <StyledLink to='/resume'>À Propos</StyledLink>
        <StyledLink to='/contact'>Contact</StyledLink>
        <StyledLink to='/WIP'>WIP</StyledLink>
      </StyledNav>
    </HeaderStyled>
  )
}

export default Header
