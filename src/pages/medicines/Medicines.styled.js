import styled from "styled-components";

export const MainMedicineStyled = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  gap: 0.5rem;

  input {
    width: 15rem;
    padding: .5rem;
    border-radius: 18px;
    border: 1px solid  rgba(140, 133, 133,0.4);
  }

  input:focus {
  outline-color: #a4cb2e; 
}
`;

export const SectionCardStyled = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 4rem;
  gap: 0.5rem;

  div {
    text-align: center;
  }

`;
