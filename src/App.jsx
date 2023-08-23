
import "./global.css"

import { AppProvider } from "./context/userContext"
import { BrowserRouter } from "react-router-dom"
import { RoutesApp } from "./Routes/RoutesApp"


function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <RoutesApp />
      </AppProvider>
    </BrowserRouter>
  )
}
export default App