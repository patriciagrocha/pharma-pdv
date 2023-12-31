import { Link } from "react-router-dom"
import styled from "styled-components"

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #a4cb2e;

  & img {
    min-width:8rem;
    width: 10rem;   
  }

  @media( min-width:769px ) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    
    img{
      padding-bottom: 0;
    }
  }
`
export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media( min-width:769px ) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4rem;
    border-bottom: 1px solid #dedad9;
  }
  
`
export const LinkStyled = styled( Link )`
  text-decoration: none;
  color: #000;
  cursor: pointer;
  padding: 8px;
  font-weight: 500;
  width: 10rem;
  text-align: center;
  border-bottom:1px solid gray;

  @media( min-width:769px ) {
    padding: .8rem 1rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  &:hover {
    color: red;
    opacity: 0.7;
    border-radius: 6px;    
  }

`
