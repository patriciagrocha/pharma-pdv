import { useNavigate } from "react-router-dom"
import { useMedicine } from "../../contexts/Medicine/useMedicine"
import { useEffect, useState } from "react"
import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import { MainMedicineStyled } from "./Medicines.styled"
import { Card } from "../../components/card/Card"
import { Modal } from "../../components/modal/Modal"
import { floatToCurrency } from "../../utils/floatToCurrency"

export const Medicines = () => {

  const { allDrugs } = useMedicine()
  const navigate = useNavigate()
  const [ openModal, setOpenModal ] = useState(false)
  const [ modalContent, setModalContent ] = useState({})

  const handleClick = () => {
    navigate("/register-medicine")
  }
  useEffect(() => {}, [allDrugs])

  const handleOpenModal = (drugData) => {
    setModalContent(drugData)
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return(
    <>
      <Header />
      <button onClick={handleClick}>Cadastrar</button>
      <h2>Medicamentos</h2>
      <MainMedicineStyled>
      {allDrugs.length > 0 ? allDrugs.map(
              ({
                drugName,
                labName,
                dosage,
                price,
                controlled,
                description,
              }) => {
                const drug = {
                  drugName,
                  labName,
                  dosage,
                  price,
                  controlled,
                  description,
                };
                return (
                  <Card
                    clickEvent={() => handleOpenModal(drug)}
                    key={drugName}
                  >                    
                    <li><img src="src/assets/imgs/medicine.jpeg" alt="caixa de medicamento" /></li>
                    <li>{drugName +" " + dosage}</li>
                    <li>{labName}</li>
                    <li className="price">
                      <strong>{floatToCurrency(price)}</strong>
                    </li>                    
                  </Card>
                );
              }
            )
          : null}
      </MainMedicineStyled>
      <Footer />
      <Modal className="modal" open={openModal} onClose={handleCloseModal}>
        <ul>

          <li>{modalContent.drugName}</li>
          <li>{modalContent.labName}</li>
          <li>{modalContent.dosage}</li>
          <li>{modalContent.price}</li>
          <li>
            {modalContent.controlled
              ? "Medicamento Controlado"
              : "Medicamento Comum"}
          </li>
          {modalContent.description ? (
            <li>{`Description ${modalContent.description}`}</li>
          ) : null}
        </ul>
      </Modal>
    
    </>

  )
}