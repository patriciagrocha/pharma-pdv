import styled from "styled-components"

export const CardContainer = styled.ul`
   list-style: none;
   width: 15rem ;
   height: 24rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   border: 1px solid gray;
   gap: 1rem;
   padding: .5rem;
  
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