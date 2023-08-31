import styled from "styled-components"

export const CardContainer = styled.div`
  ul{
    list-style: none;
    width: 15rem ;
    height: 28rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-radius: 8px;
    border: 1px solid  rgba(140, 133, 133,0.4);
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
  
  button {
    background-color: transparent;
    border: none;
    padding: 8px;
    width: 100%;

    *:hover{
      cursor: pointer;
      opacity: 0.7;    
    }
  }
  
`