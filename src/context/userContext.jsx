import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
function AppProvider({ children }) {
  const { value, setValue } = useLocalStorage('user', {})
  const [ user, setUser ] = useState({})

  useEffect(() => {
    if(value) {
      setUser(value)
    }
  }, [setUser, value])

  const logout = () => {
    setValue({})
  }

  return (
      <AppContext.Provider value={{ value, setValue, user, logout }}>
          {children}
      </AppContext.Provider>
    )
}

export { AppProvider, AppContext }