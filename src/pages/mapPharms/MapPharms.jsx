import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { DivStyled, MainFarmStyled } from "./MapPharms.styled";
import { usePharmacy } from "../../contexts/Pharmacy/usePharmacy"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Map } from "../../components/map/Map";
import { Button } from "../../components/button/Button";

export const MapPharms = () => {
  const { allPharms } = usePharmacy();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/new-pharmacy");
  };

  useEffect(() => {
    // console.log("FARMACIAS: ", allPharmacies);
  }, [allPharms]);

  return (
    <>
      <Header />
      <DivStyled>
        <Button clickEvent={handleClick}>NOVA FARMÁCIA</Button>
      </DivStyled>
      <MainFarmStyled>       
        <Map />
      </MainFarmStyled>
      <Footer />
    </>
  );
}
