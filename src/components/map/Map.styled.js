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

 .location {
    display: flex;    
  }
`
export const TdStyled = styled.td`
  padding: 1rem;
  width: 10rem;

  @media( min-width:769px ){
    width: 12rem;
  }
`
export const TrStyled = styled.tr`//linha
  min-width: 100%;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`