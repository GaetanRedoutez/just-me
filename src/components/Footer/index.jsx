import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/style/colors"
// import InstagramLogo from "../../assets/images/social-network/insta.svg"
import GmailLogo from "../../assets/images/social-network/gmail.svg"
import LinkedInLogo from "../../assets/images/social-network/linkedin.svg"
import GithubLogo from "../../assets/images/social-network/github.svg"

const FooterStyled = styled.footer`
  background: linear-gradient(
    ${colors.gradientColors},
    ${colors.headerBackground}
  );
  bottom: 0;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 20px;
  padding-top: 40px;
`

const StyledLogo = styled.img`
  width: 40px;
  height: 40px;
`

const StyledNetwork = styled.div`
  display: flex;
  flex-direction: row;
  width: 10%;
  justify-content: space-around;
`

function Footer() {
  // const formatTime = (value) => (value < 10 ? `0${value}` : value)

  // const currentDate = new Date()
  // const formattedDate = `${currentDate.getDate()}/${
  //   currentDate.getMonth() + 1
  // }/${currentDate.getFullYear()}`
  // const formattedTime = `${formatTime(currentDate.getHours())}:${formatTime(
  //   currentDate.getMinutes()
  // )}`

  return (
    <FooterStyled>
      <div>
        <img
          src='https://api.netlify.com/api/v1/badges/ffa41727-0ee7-49b7-9530-6f04e8d5728e/deploy-status'
          alt=''
        />
      </div>

      <StyledNetwork>
        <a
          href='https://www.linkedin.com/in/ga%C3%ABtan-redoutez-b090a317b/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <StyledLogo src={LinkedInLogo} alt='Logo LinkedIn' />
        </a>
        <a
          href='https://github.com/GaetanRedoutez/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <StyledLogo src={GithubLogo} alt='Logo Github' />
        </a>
        <a
          href='mailto:redoutezgaetan@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <StyledLogo src={GmailLogo} alt='Logo Gmail' />
        </a>
      </StyledNetwork>
    </FooterStyled>
  )
}

export default Footer
