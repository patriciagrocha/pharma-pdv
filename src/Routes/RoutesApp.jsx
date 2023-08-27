
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"



function RoutesApp() {
   const user = false

    if (user) {
      return <PrivateRoutes/>
    }
    return (
        <PublicRoutes/>
    )
}

export { RoutesApp }