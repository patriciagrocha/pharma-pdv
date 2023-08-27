import { Route, Routes } from "react-router-dom";
import { NewPharmacy } from "../pages/newPharmacy/NewPharmacy"
import { RegisterMed } from "../pages/registerMed/RegisterMed"


function PrivateRoutes () {
  return (
    <Routes>
      <Route path="/new-pharmacy" element={<NewPharmacy />}/>
      <Route path="/register-medicine" element={<RegisterMed />}/>
      <Route path="*" element={<p>Path not resolved</p>} />
    </Routes>
  )
}

export { PrivateRoutes }