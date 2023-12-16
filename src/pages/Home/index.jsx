import React from "react"
import styled from "styled-components"

const HomeContainer = styled.section`
  padding: 40px;
  text-align: center;
`

function Home() {
  return (
    <HomeContainer>
      <h2>Bienvenue chez moi ! 👋</h2>
      <p>
        Salut, je suis Gaëtan Redoutez, votre développeur web passionné prêt à
        donner vie à vos idées en ligne.
      </p>
      <p>
        Ancien automaticien, j'ai récemment effectué une reconversion vers le
        monde captivant du développement web. Ici, je transforme des lignes de
        code en expériences interactives et conviviales.
      </p>
      <p>
        Explorez mon parcours professionnel, découvrez mes compétences variées
        dans différents langages de programmation, et n'hésitez pas à me
        contacter pour discuter de vos projets passionnants ou en savoir plus
        sur mon parcours de reconversion.
      </p>
    </HomeContainer>
  )
}

export default Home
