import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login/Login"

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Login />}/>
    </Routes>
  )
}

