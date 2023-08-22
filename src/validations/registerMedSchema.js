
import * as yup from "yup"

export const registerMedSchema = yup.object().shape({
  drugName: yup.string().required("Campo obrigatório!"),
  labName:yup.string().required("Campo obrigatório!"),
  dosage:yup.string("Campo obrigatório!").matches(/^[0-9]+([,.][0-9]+)?$/,"Digite um valor numérico").required("Campo obrigatório!"),
  price:yup.string().matches(/^[0-9]+([,.][0-9]+)?$/,"Digite um valor numérico").required("Campo obrigatório!"),
  controlled: yup.string("teste").oneOf(["controlled", "notControlled"],"Selecione o tipo!").required(),
  description :yup.string()  
})