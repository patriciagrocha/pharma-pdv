
import { useApp } from "../hooks/useApp"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"



function RoutesApp() {
    const { user } = useApp()

    if (user?.email) {
      return <PrivateRoutes/>
    }
    return (
        <PublicRoutes/>
    )
}

export { RoutesApp }