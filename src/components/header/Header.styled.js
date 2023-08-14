import styled from "styled-components"

export const HeaderStyled = styled.header`
  width: 100%;
  height: 4rem;
  background-color: #a4cb2e;

  & img {
    width:8rem;
    height: 4rem;
  }

  @media( min-width:769px ){
    height: 6rem;
    img {
      width:12rem;
      height: 6rem;

    }
  }

`