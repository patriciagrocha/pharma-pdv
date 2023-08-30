import { useEffect, useState } from "react"
import { getData, setData } from "../../utils/localStorage"
import { PharmacyContext } from "./PharmacyContext"
import PropTypes from "prop-types"

export const PharmacyProvider = ({children}) => {

  const getPharms = () => {
    const result = getData("pharms")
    return result ? result : []
  }
  const [ allPharms, setAllPharms ] = useState(getPharms())
  
  const addPharm = (newPharm) => {
    return new Promise((resolve, reject) => {
      try {
        let pharms = getPharms()
        if(pharmExist(pharms, newPharm)){
          resolve({
            code: 409,
            message: "Já existe uma farmácia cadastrada com o mesmo e-mail ou CNPJ."
          })
        }else{
          const updatedValues = [...pharms, newPharm]
          setData("pharms",updatedValues)
          setAllPharms(getPharms());
          resolve({ code: 201, message: "Farmácia cadastrada com sucesso"})
        }
      } catch (error) {
        reject({code:400, message:error})        
      }
    })
  }

  const pharmExist = (allPharms, newPharm ) => {
    const foundPharm = allPharms.find(
      (pharm) => pharm?.email == newPharm.email || pharm.cnpj == newPharm.cnpj
    )
    return foundPharm ? true : false
  }
  
  useEffect(() => {
    const pharms = getPharms()
    setAllPharms(pharms)

  },[allPharms.length])

  return(
    <PharmacyContext.Provider
      value={{
        allPharms,
        addPharm,
      }}>
      {children}
    </PharmacyContext.Provider>
  )

}

PharmacyProvider.propTypes = {
  children: PropTypes.node
}