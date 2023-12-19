import styled from "styled-components"
import Education from "../../components/resumeComponents/Education"
import Experience from "../../components/resumeComponents/Experience"
import Language from "../../components/resumeComponents/Language"
import { colors } from "../../utils/style/colors"

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const ResumeTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: ${colors.mainText};
  text-align: center;
`
const ResumeSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`

const ArticleTitle = styled.h3`
  font-size: 25px;
  font-weight: 700;
  color: ${colors.accent1};
  text-align: center;
`

const ResumeArticle = styled.article`
  background-color: ${colors.mainBackground};
  border: 1px solid black;
  border-radius: 35px;
  width: 25%;
  text-align: center;
  height: fit-content;
`

function Resume() {
  return (
    <ResumeContainer>
      <ResumeTitle>Mon parcours</ResumeTitle>
      <ResumeSection>
        <ResumeArticle>
          <ArticleTitle>Mes diplômes</ArticleTitle>
          <Education />
        </ResumeArticle>
        <ResumeArticle>
          <ArticleTitle>Mes expériences</ArticleTitle>
          <Experience />
        </ResumeArticle>
        <ResumeArticle>
          <ArticleTitle>Mes langues</ArticleTitle>
          <Language />
        </ResumeArticle>
      </ResumeSection>
    </ResumeContainer>
  )
}

export default Resume
