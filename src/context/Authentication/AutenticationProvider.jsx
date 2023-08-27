import PropTypes from "prop-types"
import { AuthenticationContext } from "./AutenticationContext"
import { useEffect, useState } from "react"
import { getData, removeData, setData } from "../../utils/localStorage"
import { useNavigate } from "react-router-dom"

export const AuthenticationProvider = ({children}) => {

  const navigate = useNavigate()

  const [ user, setUser ] = useState(getData("user"))
  const [ isLoading, setIsLoading]  = useState(true)

  const login = (data) =>{
    return new Promise((resolve,reject) => {
      try{
        setData("user", data)
        setIsLoading(!isLoading)
        resolve({ code: 201, message: "Usuário logado com sucesso"})
      } catch(error){
        setUser(null)
        reject({code:400, message:error})
      }
    })
  }

  const logout = () => {
    setUser(null)
    removeData("user")
    setIsLoading(!isLoading)
    navigate("/")
  }

  useEffect(() =>{
    const userData = getData("user")
    setUser(userData)
  }, [isLoading])

  return(
    <AuthenticationContext.Provider
      value={{
        user,
        login,
        logout
      }}>
      {children}
    </AuthenticationContext.Provider>
  )
}

AuthenticationProvider.propTypes = {
  children: PropTypes.node,
}