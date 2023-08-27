import styled from "styled-components"

export const MainLoginStyled = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  h2{
      font-size: 2rem;
    }
  
`
export const FormLoginStyled = styled.form`
  margin-top: 2rem;
  padding: 2rem 4rem;
  border: 1px solid #fafcfb;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  box-shadow: 0px 0px 7px -1px rgba(0,0,0,0.5);

  p {
    font-size: 2rem;   
  }
  span {
    color: #ff0000;
    font-size: .8rem;
    width: 14rem;
  }
  div{
    display: flex;
    flex-direction: column;
  }
  label{
    padding: 2px;
  }
  .input-form{
    width: 18rem;
    padding: 12px;
    margin-top: 4px;
    outline-color: #a4cb2e;
    border-radius: 4px;
    border: none;
    background-color: aliceblue;
  }
  .input-select {
    display: flex;
    flex-direction: column;
  }

  @media( min-width:769px) and (max-width: 1024px){
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-gap: 10px;
    box-shadow: none;
    border: none;
  }
  @media( min-width: 1025px ) {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-gap: 10px;
    box-shadow: none;
    border: none;
  }

`
export const DivInputStyled = styled.div`
  height: 4rem;

  @media( min-width:769px) {
    height: 5rem;
  }
`
export const InputSaveStyled = styled.input`
    width: 18rem;
    padding: 12px;
    border-radius: 4px;
    border: none;
    background-color: #009739;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
  
`
export const InputClearStyled = styled.input`
    width: 18rem;
    padding: 12px;
    border-radius: 4px;
    border: none; 
    background-color: #0098c0;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
`
export const ContainerBtnStyled = styled.div`
  display: flex;
  gap: 1rem;
 
  @media( min-width:769px) and (max-width: 1024px){
    grid-area: 8 / 2; 
    padding-top: 2rem;
  }
  @media( min-width: 1025px ){
    grid-area: 9/3;
  }
`