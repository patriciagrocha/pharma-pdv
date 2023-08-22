import { useState } from "react"

const useLocalStorage = (key) => {

  // Função auxiliar para obter os valores armazenados no localStorage

  const getLocalStorageValue = () => {

    const result = localStorage.getItem(key);
   
    if (result) {
      return  JSON.parse(result) 
    } else {
      localStorage.setItem(key, JSON.stringify([]));
      return []
    }
  }

  const [valueLocal, setValueLocal] = useState([])


  const updateValue = (newValue) => {
    return new Promise((res, rej) => {
      try{
        const currentValue = getLocalStorageValue()
        const updatedValues = [...currentValue, newValue]; // Cria um novo array com o novo valor
        localStorage.setItem(key, JSON.stringify(updatedValues)); // Atualiza o localStorage
        setValueLocal(updatedValues); // Atualiza o estado local
        res(true)

      }catch(error){
        rej(error)
      }
    })
   
  }

  return{ //retorna um obj
    valueLocal,
    setValueLocal: updateValue
  }
  
}
export { useLocalStorage }