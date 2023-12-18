import styled from "styled-components"
import Education from "../../components/Education"
import Experience from "../../components/Experience"

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const ResumeSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`

function Resume() {
  return (
    <ResumeContainer>
      <h2>Mon parcours</h2>
      <ResumeSection>
        <Education />
        <Experience />
      </ResumeSection>
    </ResumeContainer>
  )
}

export default Resume
