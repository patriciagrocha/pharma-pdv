import { useEffect, useState } from "react"

const useLocalStorage = (key, initialValue) => {

  const storedValue = localStorage.getItem(key)
  const initial = storedValue ? JSON.parse(storedValue) : initialValue

  const [valueLocal, setValueLocal] = useState(initial)

  useEffect( () => {
    localStorage.setItem(key, JSON.stringify(valueLocal) )
  }, [key, valueLocal])

  const updateValue = (newValue) => {
   
    setValueLocal(newValue)
  }

  return{ //retorna um obj
    valueLocal,
    setValueLocal: updateValue
  }
  
}
export { useLocalStorage }