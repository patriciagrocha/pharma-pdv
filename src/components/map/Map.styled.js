import styled from "styled-components";
import { MapContainer, Marker, Popup } from "react-leaflet";

export const MapContainerStyled = styled(MapContainer)`
  height: 500px;
  width: 100%;

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