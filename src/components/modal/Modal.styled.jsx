import styled from "styled-components"

export const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: 1000;
`
export const ModalStyled = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 50px;
  z-index: 1000;
  color: #333333;
`
export const ModalButtonStyled = styled.button`
    background-color: transparent;    
    border: none;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    color: #000000;
    &:hover{
        opacity: 0.7;
    }   
`

export const DivStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`