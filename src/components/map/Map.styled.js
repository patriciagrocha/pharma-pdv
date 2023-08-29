import styled from "styled-components";
import { MapContainer, Marker, Popup } from "react-leaflet";

export const MapContainerStyled = styled(MapContainer)`
  height: 25rem;
  width: 100%;
  margin-bottom: 0.5rem;

  & li{
    display: flex;
    justify-items: center;
    align-items: center;
    text-align: center;
    list-style: none;
    gap: 5px;
  }
`;

export const MarkerStyled = styled(Marker)``;

export const PopupStyled = styled(Popup)``;


export const TableStyled = styled.table`
width: 100%;
border-collapse: collapse;

& .location {
    display: flex;    
  }
`
export const TdStyled = styled.td`
padding: 1rem;

  & button{
    width: 10rem;
    padding: 12px;
    border-radius: 4px;
    border: none;
    background-color: #009739;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;

    &:hover{
      opacity: 0.8;
    }
  }
`
export const TrStyled = styled.tr`
min-width: 100%;
border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
`