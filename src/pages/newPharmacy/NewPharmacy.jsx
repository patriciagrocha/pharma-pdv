import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./SchemaValidation";
import {
  ContainerBtnStyled,
  DivInputStyled,
  FormLoginStyled,
  InputClearStyled,
  InputSaveStyled,
  MainLoginStyled,
} from "./NewPharmacy.styled";

function NewPharmacy() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Header />
      <MainLoginStyled>
        <h2>Cadastro de farmácia</h2>
        <FormLoginStyled onSubmit={handleSubmit(onSubmit)}>
          <DivInputStyled>
            <label>Razão social</label>
            <input className="input-form" {...register("corporateName")} />
            <span>{errors.corporateName?.message}</span>
          </DivInputStyled>
          <DivInputStyled>
            <label>CNPJ</label>
            <input
              placeholder="00.000.000/0000-00"
              className="input-form"
              {...register("cnpj")}
            />
            <span>{errors.cnpj?.message}</span>
          </DivInputStyled>
          <DivInputStyled>
            <label>Nome fantasia</label>
            <input className="input-form" {...register("fantasyName")} />
            <span>{errors.fantasyName?.message}</span>
          </DivInputStyled>
          <DivInputStyled>
            <label>E-mail</label>
            <input className="input-form" {...register("email")} />
            <span>{errors.email?.message}</span>
          </DivInputStyled>
          <DivInputStyled>
            <label>Telefone</label>
            <input
              type="tel"
              pattern="([0-9]{2})[0-9]{4}[0-9]{4}"
              placeholder="(__)____-____"
              className="input-form"
              {...register("phoneNumber")}
            />
            <span>{errors.phoneNumber?.message}</span>
          </DivInputStyled>
          <DivInputStyled>
            <label>Celular</label>
            <input
              type="tel"
              pattern="([0-9]{2})[0-9]{5}[0-9]{4}"
              required
              placeholder="(__)_____-____"
              className="input-form"
              {...register("cellPhone")}
            />
            <span>{errors.cellPhone?.message}</span>
          </DivInputStyled>
          <DivInputStyled>
            <label>CEP</label>
            <input
              placeholder="_____-___"
              className="input-form"
              {...register("cep")}
            />
            <span>{errors.cep?.message}</span>
          </DivInputStyled>
          <DivInputStyled>
            <label>Logradouro</label>
            <input className="input-form" {...register("address")} />
            <span>{errors.address?.message}</span>
          </DivInputStyled>
          <DivInputStyled>
            <label>Número</label>
            <input
              type="number"
              className="input-form"
              {...register("addressNumber")}
            />
            <span>{errors.addressNumber?.message}</span>
          </DivInputStyled>
          <DivInputStyled>
            <label>Bairro</label>
            <input className="input-form" {...register("district")} />
            <span>{errors.district?.message}</span>
          </DivInputStyled>
          <DivInputStyled>
            <label>Estado</label>
            <input className="input-form" {...register("uf")} />
            <span>{errors.uf?.message}</span>
          </DivInputStyled>
          <DivInputStyled>
            <label>Complemento</label>
            <input className="input-form" {...register("complement")} />
            <span>{errors.complement?.message}</span>
          </DivInputStyled>
          <DivInputStyled>
            <label>Latitude</label>
            <input type="number" className="input-form" {...register("lat")} />
            <span>{errors.lat?.message}</span>
          </DivInputStyled>
          <DivInputStyled>
            <label>Longitude</label>
            <input type="number" className="input-form" {...register("long")} />
            <span>{errors.long?.message}</span>
          </DivInputStyled>
          <ContainerBtnStyled>
            <InputSaveStyled type="submit" value={"Cadastrar"} />
            <InputClearStyled type="reset" value={"Limpar"} />
          </ContainerBtnStyled>
        </FormLoginStyled>
      </MainLoginStyled>
      <Footer />
    </>
  );
}
export { NewPharmacy };
