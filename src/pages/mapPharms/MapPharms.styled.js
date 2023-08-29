import styled from "styled-components"

export const MainFarmStyled = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction:column;
  justify-items: center;
  padding: 0 10% 0 10%;
  
  h2{
      font-size: 2rem;
    }  
`

export const DivStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & button{
    width: 10rem;
    padding: 12px;
    border-radius: 4px;
    border: none;
    background-color: #009739;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    margin: 1rem 10% 1rem 1rem;
    cursor: pointer;

    &:hover{
      opacity: 0.8;
    }
  }
`




 