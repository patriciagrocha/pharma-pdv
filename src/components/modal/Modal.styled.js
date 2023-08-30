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
  width: 80%;
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
  padding: 1.5rem;
  z-index: 1000;
  color: #333333;

  ul{
    list-style: none;
    display: flex;
    gap: 2rem;
  }
  .list-modal{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  img{
    width: 6rem;
  }
  @media( min-width:769px ){
    width: 50%;
  }
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