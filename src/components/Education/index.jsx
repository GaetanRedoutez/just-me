import styled from "styled-components"
import { educations } from "../../utils/data/educations"
import { colors } from "../../utils/style/colors"

const ArticleTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${colors.accent1};
  text-align: center;
`
const ListTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.mainText};
`
const ListText = styled.p`
  color: ${colors.secondaryText};
`
function Education() {
  const educationsList = Object.values(educations)
  const sortedEducations = [...educationsList].sort((a, b) => b.id - a.id)

  return (
    <article>
      <ArticleTitle>Mes diplômes</ArticleTitle>
      <ul>
        {sortedEducations.map((education) => (
          <li key={education.id + Date.now()}>
            <ListTitle>
              {education.type} {education.name} -- Niveau RNCP :{" "}
              {education.qualificationLevel}
            </ListTitle>
            <ListText>
              {education.establishment} - {education.city}
            </ListText>
            <ListText>Spécialité : {education.specialization}</ListText>
            <ListText>Date : {education.date}</ListText>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Education
