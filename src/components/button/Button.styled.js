import {  styled } from "styled-components";

export const ButtonStyled = styled.button`
    width: 6rem;
    padding: 12px 6px;
    border-radius: 4px;
    border: none;
    background-color: #009739;
    color: #fff;
    font-weight: 500;
    font-size: .8rem;
    margin: 1rem 10% 1rem 1rem;
    cursor: pointer;

    &:hover{
      opacity: 0.8;
    }
    @media( min-width:769px ) {
    /* padding: .8rem 1rem; */
    width: 10rem;
    padding: 12px;
    font-size: 1rem;
  }

`