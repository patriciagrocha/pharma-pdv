
import { useAuthentication } from "../context/Authentication/useAuthentication"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"



function RoutesApp() {
   const {user} = useAuthentication()

    if (user?.email) {
      return <PrivateRoutes/>
    }
    return (
        <PublicRoutes/>
    )
}

export { RoutesApp }