import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import {  MainFarmStyled } from "./MapPharms.styled";
import { usePharmacy } from "../../contexts/Pharmacy/usePharmacy"
import { useEffect } from "react";
import { Map } from "../../components/map/Map";


export const MapPharms = () => {
  const { allPharms } = usePharmacy();

  useEffect(() => {}, [allPharms]);

  return (
    <>
      <Header />
      <MainFarmStyled>       
        <Map />
      </MainFarmStyled>
      <Footer />
    </>
  );
}
