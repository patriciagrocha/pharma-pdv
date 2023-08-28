import { useContext } from "react"
import { MedicineContext} from "./MedicineContext"

export const useMedicine = () => {
  const context = useContext(MedicineContext)
  return context
}