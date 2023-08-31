import styled from "styled-components";
import { MapContainer, Marker, Popup } from "react-leaflet";

export const MapContainerStyled = styled(MapContainer)`
  height: 18rem;
  width: 80%;
  margin: auto;
  margin-bottom: 0.5rem;

  & li {
    display: flex;
    justify-items: center;
    align-items: center;
    text-align: center;
    list-style: none;
    gap: 5px;
  }
  @media (min-width: 769px) {
    width: 100%;
  }
`;
export const DivInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;
export const MarkerStyled = styled(Marker)``;

export const PopupStyled = styled(Popup)``;

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;

  .location {
    display: flex;
  }
`;
export const TdStyled = styled.td`
  padding: 1rem;

  @media (min-width: 769px) {
    width: 14rem;
  }

  .btn-delete {
    width: 6rem;
    padding: 12px 6px;
    border-radius: 4px;
    border: none;
    background-color: #f01713;
    color: #fff;
    font-weight: 500;
    font-size: 0.8rem;
    margin: 0 1rem;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    @media (min-width: 769px) {
      width: 10rem;
      padding: 12px;
      font-size: 1rem;
    }
  }
`;
export const TrStyled = styled.tr`
  //linha
  min-width: 100%;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
