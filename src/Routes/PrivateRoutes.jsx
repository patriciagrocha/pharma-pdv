import { Route, Routes } from "react-router-dom";
import { NewPharmacy } from "../pages/newPharmacy/NewPharmacy"
import { RegisterMed } from "../pages/registerMed/RegisterMed"
import { MapPharms } from "../pages/mapPharms/MapPharms";


function PrivateRoutes () {
  return (
    <Routes>
      <Route path="/new-pharmacy" element={<NewPharmacy />}/>
      <Route path="/register-medicine" element={<RegisterMed />}/>
      <Route path="/map-pharms" element={<MapPharms />}/>
      <Route path="*" element={<MapPharms />} />
    </Routes>
  )
}

export { PrivateRoutes }