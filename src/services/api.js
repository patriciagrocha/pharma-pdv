import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BRASIL_API
})

export { api }