
import { useAuthentication } from "../contexts/Authentication/useAuthentication"
import { PharmacyProvider } from "../contexts/Pharmacy/PharmacyProvider"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"


export const RoutesApp = () => {
   const {user} = useAuthentication()

    if (user?.email) {
      return(
        <PharmacyProvider>
           <PrivateRoutes/>
        </PharmacyProvider>
      )
    }
    return (
        <PublicRoutes/>
    )
}

