import styled from "styled-components"
import { colors } from "../../../utils/style/colors"

const ListTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.mainText};
`
const ListText = styled.p`
  color: ${colors.secondaryText};
`

function Language() {
  return (
    <div>
      <ul>
        <li>
          <ListTitle>Français</ListTitle>
          <ListText>Langue natale</ListText>
        </li>
        <li>
          <ListTitle>Anglais</ListTitle>
          <ListText>Niveau intermédiaire</ListText>
          <ListText>TOEIC - 705 (2019)</ListText>
        </li>
      </ul>
    </div>
  )
}

export default Language
