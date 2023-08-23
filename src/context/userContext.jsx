import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
function AppProvider({ children }) {
  const { valueLocal, setValueLocal, getValue} = useLocalStorage('user')
  const [ user, setUser ] = useState(getValue())
  

  useEffect(() => {
    if(user[0]) {
      setUser(user[0])
    }
  }, [user, valueLocal])

  const logout = () => {
    //removeUser()
    console.log("passou");
    setValueLocal({})
  }

  return (
      <AppContext.Provider value={{ valueLocal, setValueLocal, user, logout }}>
          {children}
      </AppContext.Provider>
    )
}

export { AppProvider, AppContext }