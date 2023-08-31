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
import { stringToFloat } from "../../utils/stringToFloat";
import { useMedicine } from "../../contexts/Medicine/useMedicine";
import { v4 as uuidv4 } from 'uuid';

export const RegisterMed = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
  } = useForm({ resolver: yupResolver(registerMedSchema) });

  const { addDrug } = useMedicine()

  const onSubmit = async (data) => {
    data.id = uuidv4();
    data.dosage = stringToFloat(data.dosage)
    data.price = stringToFloat(data.price)

    try{
      const result =  await addDrug(data)
      if(result.code == 201 ){
        toast.success(result.message, {});
        resetForm();
      }else if(result.code == 409){
        toast.error(result.message, {})
      } 
    }catch(error){
      toast.error("Ocorreu um erro inesperado. Consulte o suporte.", {})
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
          <label className="input-select">
            Categoria
          <select  className="input-form " {...register("controlled")}>
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
    </>
  )
}
