
import * as yup from "yup"

export const newPharmacySchema = yup.object().shape({
  corporateName: yup.string().required("Campo obrigatório!"),
  cnpj: yup.string().required('Campo obrigatório').matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'CNPJ inválido'),
  fantasyName:yup.string().required("Campo obrigatório!"),
  email: yup.string().required("Campo obrigatório!").email("Insira um e-mail válido"),
  phoneNumber: yup.string().max(10, "Máximo 10 caracteres"),
  cellPhone: yup.string().required("Campo obrigatório!").max(11, "Máximo 11 caracteres"),
  cep: yup.string().matches(/^\d{5}\d{3}$/, 'CEP inválido').required("Campo obrigatório!"),
  address: yup.string().required("Campo obrigatório!"),
  addressNumber: yup.string().required('Número é obrigatório'),
  district:  yup.string().required("Campo obrigatório!"),
  city:  yup.string().required("Campo obrigatório!"),
  uf:  yup.string().required("Campo obrigatório!"),
  complement: yup.string(),
  lat: yup.string().min(-90).max(90).required("Campo obrigatório!"),
  long: yup.string().min(-180).max(180).required("Campo obrigatório!")
})