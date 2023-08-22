import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ContainerBtnStyled,
  DivInputStyled,
  FormLoginStyled,
  InputClearStyled,
  InputSaveStyled,
  MainLoginStyled,
} from "./RegisterMed.styled";
import { registerMedSchema } from "../../validations/registerMedSchema";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { stringToFloat } from "../../utils/stringToFloat";

function RegisterMed() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
  } = useForm({ resolver: yupResolver(registerMedSchema) });

  const { setValueLocal } = useLocalStorage("drugs", {})

  const onSubmit = async (data) => {

    data.dosage = stringToFloat(data.dosage)
    data.price = stringToFloat(data.price)

    try{
      const result =  await setValueLocal(data)
      if(result){
        toast.success('Medicamento cadastrado com sucesso!', {});
        resetForm();
      }else{
        toast.error("Falha ao cadastrar os dados.Tente novamente!", {})
      } 
    }catch(error){
      toast.error("Ocorreu um erro inesperado.Tente novamente!", {})

    }

    
  }
  const resetForm = () => {
    setValue("drugName", "")
    setValue("labName", "")
    setValue("dosage", "")
    setValue("price", "")
    setValue("controlled", "")
    setValue("description", "")
    setFocus("drugName")

  }
  
  return(
    <>
    <Header />
    <MainLoginStyled>
      <h2>Cadastro de medicamento </h2>

      <FormLoginStyled onSubmit={handleSubmit(onSubmit)}>
        <DivInputStyled>
          <label>Medicamento</label>
          <input className="input-form" {...register("drugName")} />
          <span>{errors.drugName?.message}</span>
        </DivInputStyled>
        <DivInputStyled>
          <label>Laboratório</label>
          <input
            className="input-form"
            {...register("labName")}
          />
          <span>{errors.labName?.message}</span>
        </DivInputStyled>
        <DivInputStyled>
          <label>Dosagem</label>
          <input className="input-form" {...register("dosage")} />
          <span>{errors.dosage?.message}</span>
        </DivInputStyled>
       
        <DivInputStyled>
          <label>Preço</label>
          <input
            type=""            
            className="input-form"
            {...register("price")}
          />
          <span>{errors.price?.message}</span>
        </DivInputStyled>
        <DivInputStyled>
          <label>
            Tipo
          <select  className="input-form" {...register("controlled")}>
            <option value="">Escolha... </option>
            <option value="controlled">Medicamento controlado </option>
            <option value="notControlled">Medicamento comum </option>
          </select>
          </label>
          <span>{errors.controlled?.message}</span>
          
        </DivInputStyled>
        <DivInputStyled>
          <label>Descrição</label>
          <textarea 
          className="input-form" 
          {...register("description")} 
          rows={4} cols={40} />
          <span>{errors.description?.message}</span>
        </DivInputStyled>
        <ContainerBtnStyled>
            <InputSaveStyled type="submit" value={"Cadastrar"} />
            <InputClearStyled type="reset" value={"Limpar"} />
          </ContainerBtnStyled>
        </FormLoginStyled>
      </MainLoginStyled>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        
    </>
  )
}

export { RegisterMed }