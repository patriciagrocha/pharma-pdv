
import "./global.css"

import { BrowserRouter } from "react-router-dom"
import { RoutesApp } from "./Routes/RoutesApp"
import { AuthenticationProvider } from "./context/Authentication/AutenticationProvider"


function App() {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <RoutesApp />
      </AuthenticationProvider>    
    </BrowserRouter>
  )
}
export default App