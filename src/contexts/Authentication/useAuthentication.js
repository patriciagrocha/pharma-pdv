import { useContext } from "react";

import { AuthenticationContext } from "./AutenticationContext";

export const useAuthentication = () => {
  const context = useContext(AuthenticationContext)
  return context
}