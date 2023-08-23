import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { FormLoginStyled, InputLoginStyled, MainLoginStyled } from "./Login.styled"
import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import { useApp } from "../../hooks/useApp"
import { useNavigate } from "react-router-dom"


const schema = yup.object().shape({
  email: yup.string()
  .required("Campo obrigatório!")
  .email("Insira um e-mail válido"),

  password: yup.string()
  .required("Campo obrigatório!")
  .matches(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/, "A senha deve ter pelo menos 8 caracteres com letras e números")
})

function Login(){
  const { 
    register, 
    handleSubmit, 
    formState: { errors} } = useForm({resolver: yupResolver(schema)})

  const { setValueLocal} = useApp()  

  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data);
    setValueLocal(data)
    navigate("/new-pharmacy")    
  }
 


  return (
    <>
      <Header />
      <MainLoginStyled>
        <FormLoginStyled onSubmit={handleSubmit(onSubmit)}>
          <p>Faça seu login</p>
          <div>
            <label>E-mail</label>
            <input 
              className="input-form"
              placeholder="Seu e-mail" 
              {...register("email")} />
            <span>{errors.email?.message}</span>
          </div>
          <div>
            <label>Senha</label>
            <input
              className="input-form"
              placeholder="Senha"
              type="password"
              {...register("password")}
            />
            <span>{errors.password?.message}</span>
          </div>
          <InputLoginStyled type="submit" value="Entrar" />
        </FormLoginStyled>
      </MainLoginStyled>
      <Footer />
    </>
  );
}
export { Login }