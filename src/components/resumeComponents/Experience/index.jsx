import styled from "styled-components"
import { experiences } from "../../../utils/data/experiences.js"
import { colors } from "../../../utils/style/colors"

const ListTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.mainText};
`
const ListText = styled.p`
  color: ${colors.secondaryText};
`
function Experience() {
  const experiencesList = Object.values(experiences)
  const sortedexperiences = [...experiencesList].sort((a, b) => b.id - a.id)

  return (
    <div>
      <ul>
        {sortedexperiences.map((experience) => (
          <li key={experience.id + Date.now()}>
            <ListTitle>{experience.job}</ListTitle>
            <ListText>
              {experience.society} - {experience.city}
            </ListText>
            <ListText>Date : {experience.date}</ListText>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Experience
