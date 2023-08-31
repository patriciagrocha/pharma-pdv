import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FormLoginStyled,
  InputLoginStyled,
  MainLoginStyled,
} from "./Login.styled";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../contexts/Authentication/useAuthentication";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Campo obrigatório!")
    .email("Insira um e-mail válido"),

  password: yup
    .string()
    .required("Campo obrigatório!")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
      "A senha deve ter entre 8 - 12 caracteres com letras e números"
    )
    .max(12, "A senha deve ter no máximo 12 caracteres"),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { login } = useAuthentication();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const result = await login(data);
      if (result.code == 201) {
        navigate("/medicines");
      } else {
        toast.error("Falha ao efetuar login.Tente novamente!", {});
      }
    } catch (error) {
      toast.error("Ocorreu um erro inesperado. Consulte o suporte!", {});
    }
  };

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
              {...register("email")}
            />
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
export { Login };
