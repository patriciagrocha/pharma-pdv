import "./global.css";

import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./Routes/RoutesApp";
import { AuthenticationProvider } from "./contexts/Authentication/AutenticationProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthenticationProvider>
          <RoutesApp />
        </AuthenticationProvider>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
export default App;
