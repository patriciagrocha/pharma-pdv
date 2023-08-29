import PropTypes from "prop-types"
import { ButtonStyled } from "./Button.styled"

export const Button = ({clickEvent, children}) => {
  return(
    <ButtonStyled onClick={clickEvent}>
      {children}
    </ButtonStyled>
  )
}
Button.propTypes = {
  children: PropTypes.node,
  clickEvent: PropTypes.func
}