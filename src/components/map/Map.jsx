import { useEffect, useState } from "react";
import { usePharmacy } from "../../contexts/Pharmacy/usePharmacy";
import { TileLayer } from "react-leaflet";
import {
  DivInfoContainer,
  MapContainerStyled,
  MarkerStyled,
  PopupStyled,
  TableStyled,
  TdStyled,
  TrStyled,
} from "./Map.styled";
import "leaflet/dist/leaflet.css";
import { AiFillPhone } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Button } from "../button/Button";
import markerIcon from "../../assets/imgs/marker.png";
import { Icon } from "leaflet";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Map = () => {
  const { allPharms, deletePharm } = usePharmacy();
  const [currentCenter, setCurrentCenter] = useState([-26.301478, -48.8479779]);
  const [currentZoom, setCurrentZoom] = useState(5);
  const [forceUpdate, setForceUpdate] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {}, [allPharms.length]);
  useEffect(() => {}, [currentCenter, currentZoom]);

  const removePharm = async (pharmId) => {
    try {
      const result = await deletePharm(pharmId);
      if (result.code == 200) {
        toast.success(result.message, {});
      }
    } catch (error) {
      toast.error("Ocorreu um erro inesperado. Consulte o suporte.", {});
    }
  };

  const handleChangeCoordinates = (coordinates) => {
    setCurrentCenter(coordinates);
    setCurrentZoom(18);
    setForceUpdate(forceUpdate + 1);
    scrollToTop();
    return;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const customIcon = new Icon({
    iconUrl: markerIcon,
    iconSize: [35, 35],
  });

  const handleClick = () => {
    navigate("/new-pharmacy");
  };

  return (
    <>
      <MapContainerStyled
        key={forceUpdate}
        center={currentCenter}
        zoom={currentZoom}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a rel="external"> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {allPharms.length > 0
          ? allPharms.map(
              ({
                corporateName,
                cnpj,
                fantasyName,
                email,
                phoneNumber,
                cellPhone,
                address,
                city,
                addressNumber,
                district,
                uf,
                cep,
                complement,
                lat,
                long,
              }) => {
                return (
                  <MarkerStyled
                    key={email}
                    position={[lat, long]}
                    icon={customIcon}
                  >
                    <PopupStyled>
                      <ul>
                        <li>
                          <strong>
                            <h3>{fantasyName.toUpperCase()}</h3>
                          </strong>
                        </li>
                        <li>
                          <strong>RAZÃO SOCIAL:</strong>
                          {corporateName}
                        </li>
                        <li>
                          <strong>CNPJ:</strong>
                          {cnpj}
                        </li>
                        <li>
                          <strong>CEP:</strong>
                          {cep}
                        </li>
                        <li>
                          <MdLocationOn />
                          {address +
                            ", " +
                            addressNumber +
                            " - " +
                            district +
                            ", " +
                            city +
                            " - " +
                            uf}
                        </li>
                        {complement ? (
                          <li>
                            <strong>Complemento:</strong>
                            {complement}
                          </li>
                        ) : null}
                        <li>
                          <MdEmail />
                          {email}
                        </li>
                        {phoneNumber ? (
                          <li>
                            <AiFillPhone />
                            {phoneNumber}
                          </li>
                        ) : null}
                        <li>
                          <RiWhatsappFill color="green" />
                          <a
                            href={`https://wa.me/55${cellPhone}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {cellPhone}
                          </a>
                        </li>
                      </ul>
                    </PopupStyled>
                  </MarkerStyled>
                );
              }
            )
          : null}
      </MapContainerStyled>
      {allPharms.length > 0 ? (
        <TableStyled>
          <thead>
            <tr>{null}</tr>
          </thead>
          <tbody>
            {allPharms.map(
              ({
                id,
                cnpj,
                fantasyName,
                cellPhone,
                address,
                city,
                addressNumber,
                district,
                uf,
                lat,
                long,
              }) => {
                return (
                  <TrStyled key={cnpj}>
                    <TdStyled className="location">
                      <MdLocationOn size={30} />
                      <div>
                        <p>
                          <strong>{district.toUpperCase()}</strong>
                        </p>
                        <p>{city + " - " + uf}</p>
                      </div>
                    </TdStyled>
                    <TdStyled>
                      <p>
                        <strong>{fantasyName}</strong>
                      </p>
                      <p>{`${address}, ${addressNumber}`}</p>
                      <div>
                        <RiWhatsappFill color="green" />
                        <a
                          href={`https://wa.me/55${cellPhone}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {cellPhone}
                        </a>
                      </div>
                    </TdStyled>
                    <TdStyled>
                      <Button
                        clickEvent={() => handleChangeCoordinates([lat, long])}
                      >
                        VER NO MAPA
                      </Button>
                      <button
                        className="btn-delete"
                        onClick={() => removePharm(id)}
                      >
                        EXCLUIR
                      </button>
                    </TdStyled>
                  </TrStyled>
                );
              }
            )}
          </tbody>
        </TableStyled>
      ) : (
        <DivInfoContainer>
          <p>Nenhuma farmácia cadastrada.</p>
          <Button clickEvent={handleClick}>Cadastrar Farmácia</Button>
        </DivInfoContainer>
      )}
    </>
  );
};
