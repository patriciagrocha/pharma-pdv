import { useEffect } from "react";
import { usePharmacy } from "../../contexts/Pharmacy/usePharmacy";
import { MapContainerStyled, MarkerStyled, PopupStyled } from "./Map.styled";
import { stringToFloat } from "../../utils/stringToFloat";
import { TileLayer } from "leaflet";
import { MdLocationOn, MdEmail } from "react-icons/md"
import { AiFillPhone} from "react-icons/ai"
import { RiWhatsappFill} from "react-icons/ri"

export const Map = () => {

  const { allPharms } = usePharmacy()

  useEffect(() => {}, [allPharms])

  return(
    <MapContainerStyled
      zoom={5}
      scrollWheelZoom={true}
      center={allPharms ? [
        stringToFloat(allPharms[0].lat),
        stringToFloat(allPharms[0].long)
      ] : [-26.301478,-48.8479779 ]}>

        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a rel="external"> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
        allPharms ? allPharms.map(
            ({
              corporateName,
              cnpj,
              fantasyName,
              email,
              phoneNumber,
              cellPhone,
              address,
              addressNumber,
              district,
              uf,
              cep,
              complement,
              lat,
              long,
            }) => {
              return (
                <MarkerStyled key={corporateName} position={[lat, long]}>
                  <PopupStyled>
                    <ul>
                      <li>
                        <strong><h3>{fantasyName.toUpperCase()}</h3></strong>
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
                          target="_blank" rel="noreferrer"
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

  )
}