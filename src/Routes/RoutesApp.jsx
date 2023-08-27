
import { useAuthentication } from "../context/Authentication/useAuthentication"
import { PharmacyProvider } from "../context/Pharmacy/PharmacyProvider"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"



function RoutesApp() {
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

export { RoutesApp }