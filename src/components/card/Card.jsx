import { CardContainer } from "./Card.styled"
import PropTypes from "prop-types"

export const Card = ({clickEvent, children}) => {
  return(
    <CardContainer onClick={clickEvent}>
      {children}
    </CardContainer>
  )
}
Card.propTypes = {
  children: PropTypes.node,
  clickEvent: PropTypes.func
}