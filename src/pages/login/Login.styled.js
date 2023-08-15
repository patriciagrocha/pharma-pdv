import styled from "styled-components"

export const MainLoginStyled = styled.main`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;

`
export const FormLoginStyled = styled.form`
  padding: 2rem;
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
    width: 14rem;
    padding: 8px;
    outline-color: #a4cb2e;
    border-radius: 4px;
    border: none;
    background-color: aliceblue;
  }
`
export const InputLoginStyled = styled.input`
    width: 14rem;
    padding: 8px;
    border-radius: 4px;
    border: none;
    background-color: #0098c0;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
  
`