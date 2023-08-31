import { Route, Routes } from "react-router-dom";
import { NewPharmacy } from "../pages/newPharmacy/NewPharmacy"
import { RegisterMed } from "../pages/registerMed/RegisterMed"
import { MapPharms } from "../pages/mapPharms/MapPharms";
import { Medicines } from "../pages/medicines/Medicines";


function PrivateRoutes () {
  return (
    <Routes>
      <Route path="/medicines" element={<Medicines/>}/>
      <Route path="/register-medicine" element={<RegisterMed />}/>
      <Route path="/map-pharms" element={<MapPharms />}/>
      <Route path="/new-pharmacy" element={<NewPharmacy />}/>
      <Route path="*" element={<MapPharms />} />
    </Routes>
  )
}

export { PrivateRoutes }