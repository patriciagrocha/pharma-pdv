import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { MainFarmStyled } from "./MapPharms.styled";
import { usePharmacy } from "../../contexts/Pharmacy/usePharmacy"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Map } from "../../components/map/Map";

export const MapPharms = () => {
  const { allPharmacies } = usePharmacy();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/new-pharmacy");
  };

  useEffect(() => {
    // console.log("FARMACIAS: ", allPharmacies);
  }, [allPharmacies]);

  return (
    <>
      <Header />
      <button onClick={handleClick}>NOVA FARMÁCIA</button>
        <h2>Nossas Lojas</h2>
      <MainFarmStyled>       
        <Map />
      </MainFarmStyled>
      <Footer />
    </>
  );
}
