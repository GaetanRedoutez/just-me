import styled from "styled-components"
import { educations } from "../../../utils/data/educations"
import { colors } from "../../../utils/style/colors"

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
    <div>
      <ul>
        {sortedEducations.map((education) => (
          <li key={education.id + Date.now()}>
            <ListTitle>
              {education.type} {education.name}
            </ListTitle>
            <ListText>Niveau RNCP : {education.qualificationLevel}</ListText>
            <ListText>
              {education.establishment} - {education.city}
            </ListText>
            <ListText>{education.specialization}</ListText>
            <ListText>Date : {education.date}</ListText>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Education
