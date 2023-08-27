import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newPharmacySchema } from "../../validations/newPharmacySchema";
import { api } from "../../services/api"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ContainerBtnStyled,
  DivInputStyled,
  FormLoginStyled,
  InputClearStyled,
  InputSaveStyled,
  MainLoginStyled,
} from "./NewPharmacy.styled";
import { usePharmacy } from "../../context/Pharmacy/usePharmacy"


function NewPharmacy() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
  } = useForm({ resolver: yupResolver(newPharmacySchema) });
  

  const [ address, setAddress ] = useState()

  const { addPharm } = usePharmacy()
  
  const handleCep = async (e) => {
    const cep = e.target.value.replace(/\D/g,"");
   
    try{
      const response = await api.get(`/${cep}`);
      //console.log(response.data);
      setAddress (response.data)      
    }catch (error){
      console.log(error,'Erro ao buscar o endereço. Verifique o CEP e tente novamente.');
      setAddress();
    }   
  }
  useEffect(() => {
    if(address){
      setValue("address", address.street)
      setValue("district", address.neighborhood)
      setValue("uf", address.state)
      setValue("lat",address.location.coordinates.latitude)
      setValue("long",address.location.coordinates.longitude)
      setFocus("addressNumber")
    }
    
  },[address])

  
  const onSubmit = async (data) => {  
    
    try{
      const result = await addPharm(data)
      if(result.code == 201){
        toast.success(result.message, {});
        resetForm();
      }else if(result.code == 409){
        toast.error(result.message, {})
      } 

    }catch (error){
      toast.error("Ocorreu um erro inesperado. Consulte o suporte!", {})
     
    }
      
  };
  const resetForm = () => {
    setValue("corporateName", "")
    setValue("cnpj", "")
    setValue("fantasyName", "")
    setValue("email", "")
    setValue("phoneNumber", "")
    setValue("cellPhone", "")
    setValue("cep", "")
    setValue("address", "")
    setValue("addressNumber", "")
    setValue("district", "")
    setValue("uf", "")
    setValue("complement", "")
    setValue("lat","")
    setValue("long","")
    setFocus("corporateName")

  }
  

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
              onBlur={handleCep}
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
            <input  className="input-form" {...register("lat")} />
            <span>{errors.lat?.message}</span>
          </DivInputStyled>
          <DivInputStyled>
            <label>Longitude</label>
            <input  className="input-form" {...register("long")} />
            <span>{errors.long?.message}</span>
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
  );
}
export { NewPharmacy };
