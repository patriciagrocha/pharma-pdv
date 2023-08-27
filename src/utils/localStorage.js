export const getData = (key) => {
  return JSON.parse(localStorage.getItem(key))
}
export const setData = (key, data) => {
 localStorage.setItem(key, JSON.stringify(data))
 return
}
export const removeData = (key) => {
  localStorage.removeItem(key)
  return
}
