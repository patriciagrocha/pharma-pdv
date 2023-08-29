import PropTypes from "prop-types"
import { DivStyled, ModalButtonStyled, ModalStyled, OverlayStyled } from "./Modal.styled"

export const Modal = ({open, onClose, children}) => {
  if(!open){
    return null
  }
  return(
    <OverlayStyled>
      <ModalStyled>
        <DivStyled>
          <ModalButtonStyled onClick={onClose}>
            &times;
          </ModalButtonStyled>
        </DivStyled>
          {children}
      </ModalStyled>
    </OverlayStyled>
  )

}
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}