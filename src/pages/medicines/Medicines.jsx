import drugImg from "../../assets/imgs/medicine.jpeg";
import { useMedicine } from "../../contexts/Medicine/useMedicine";
import { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { MainMedicineStyled, SectionCardStyled } from "./Medicines.styled";
import { Card } from "../../components/card/Card";
import { Modal } from "../../components/modal/Modal";
import { floatToCurrency } from "../../utils/floatToCurrency";
import { Button } from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { FaInfoCircle, FaTrashAlt } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Medicines = () => {
  const { allDrugs, deleteDrug } = useMedicine();
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [foundDrugs, setFoundDrugs] = useState(allDrugs);
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const removeDrug = async (drugId) => {
    try {
      const result = await deleteDrug(drugId);
      if (result.code == 200) {
        toast.success(result.message, {});
      }
    } catch (error) {
      toast.error("Ocorreu um erro inesperado. Consulte o suporte.", {});
    }
  };

  useEffect(() => {
    setFoundDrugs(allDrugs);
  }, [allDrugs.length]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredDrugs = allDrugs.filter((drug) =>
      drug.drugName.toLowerCase().includes(searchTerm)
    );
    setFoundDrugs(filteredDrugs);
    setSearchValue(searchTerm);
  };

  const handleOpenModal = (drugData) => {
    setModalContent(drugData);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleClick = () => {
    navigate("/register-medicine");
  };
  return (
    <>
      <Header />
      <MainMedicineStyled>
        <form>
          <input
            type="text"
            placeholder="Digite o nome do medicamento"
            value={searchValue}
            onChange={handleSearch}
          />
        </form>
        <SectionCardStyled>
          {foundDrugs.length > 0 ? (
            foundDrugs.map(
              ({
                id,
                drugName,
                labName,
                dosage,
                price,
                controlled,
                description,
              }) => {
                const drug = {
                  id,
                  drugName,
                  labName,
                  dosage,
                  price,
                  controlled,
                  description,
                };
                return (
                  <>
                    <Card key={id}>
                      {" "}
                      <ul>
                        <li>
                          <button onClick={() => handleOpenModal(drug)}>
                            <FaInfoCircle size={30} color=" #93acd6" />
                          </button>
                        </li>
                        <li>
                          <img src={drugImg} alt="caixa de medicamento" />
                        </li>
                        <li>{drugName + " " + dosage + "mg"}</li>
                        <li>{labName.toUpperCase()}</li>
                        <li className="price">
                          <strong>{floatToCurrency(price)}</strong>
                        </li>
                        <li>
                          <button onClick={() => removeDrug(id)}>
                            <FaTrashAlt size={25} color="#f01713" />
                          </button>
                        </li>
                      </ul>
                    </Card>
                  </>
                );
              }
            )
          ) : searchValue === "" ? (
            <div>
              <p>Nenhum medicamento cadastrado.</p>
              <Button clickEvent={handleClick}>Cadastrar Medicamento</Button>
            </div>
          ) : (
            <p>Nenhum medicamento encontrado.</p>
          )}
        </SectionCardStyled>
      </MainMedicineStyled>
      <Footer />
      <Modal className="modal" open={openModal} onClose={handleCloseModal}>
        <ul>
          <li>
            {" "}
            <img src={drugImg} alt="caixa do medicamento" />{" "}
          </li>
          <div className="list-modal">
            <li>
              <strong>Medicamento: </strong>
              {modalContent.drugName}
            </li>
            <li>
              <strong>Laboratório: </strong>
              {modalContent.labName}
            </li>
            <li>
              <strong>Dosagem: </strong>
              {modalContent.dosage + "mg"}
            </li>
            <li>
              <strong>Preço: </strong>
              {typeof modalContent.price == "number"
                ? floatToCurrency(modalContent.price)
                : modalContent.price}
            </li>
            <li>
              <strong>Categoria: </strong>
              {modalContent.controlled
                ? "Medicamento Controlado"
                : "Medicamento Comum"}
            </li>
            {modalContent.description ? (
              <li>
                <strong>Descrição: </strong>
                {modalContent.description}
              </li>
            ) : null}
          </div>
        </ul>
      </Modal>      
    </>
  );
};
