import styled from "styled-components"

export const CardContainer = styled.div`
  ul{
    list-style: none;
    width: 15rem ;
    height: 22rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    border-radius: 8px;
    border: 1px solid  rgba(140, 133, 133,0.4);
  }
  ul:hover{
    box-shadow: 0px 0px 16px 2px rgba(140, 133, 133,0.6);
    cursor: pointer;
  }
  li{ 
    font-weight: 500;
    color: #1a1a1a;
  }
  .price{
    color: #344bf0 ;
  }
  
  img{
    width: 8rem;
  }
`