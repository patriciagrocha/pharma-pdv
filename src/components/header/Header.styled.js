import { Link } from "react-router-dom"
import styled from "styled-components"

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: #a4cb2e;

  & img {
    width:8rem;
    height: 4rem;
  }


  @media( min-width:769px ) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
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
  }
  
`
export const LinkStyled = styled( Link )`
  text-decoration: none;
  color: #000;
  cursor: pointer;
  padding: 4px;

  @media( min-width:769px ) {
    padding: .5rem 1rem;
  }
  &:hover {
    background-color: #a2f2dd;
    border-radius: 6px;
  }

`
