import { useContext } from "react";
import { PharmacyContext } from "./PharmacyContext";

export const usePharmacy = () => {
  const context = useContext(PharmacyContext)
  return context
}