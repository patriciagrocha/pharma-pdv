import PropTypes from "prop-types";
import { MedicineContext } from "./MedicineContext";
import { getData, setData } from "../../utils/localStorage";
import { useEffect, useState } from "react";

export const MedicineProvider = ({ children }) => {
  const getDrugs = () => {
    const result = getData("drugs");
    return result ? result : [];
  };

  const [allDrugs, setAllDrugs] = useState(getDrugs());

  const addDrug = (newDrug) => {
    return new Promise((resolve, reject) => {
      try {
        let drugs = getDrugs();
        if (drugExist(drugs, newDrug)) {
          resolve({
            code: 409,
            message: "Já existe um medicamento cadastrado com os mesmos dados.",
          });
        } else {
          const updateValue = [...drugs, newDrug];
          setData("drugs", updateValue);
          setAllDrugs(updateValue);
          resolve({
            code: 201,
            message: "Medicamento cadastrado com sucesso!",
          });
        }
      } catch (error) {
        reject({
          code: 400,
          message: error,
        });
      }
    });
  };

  const deleteDrug = (drugId) => {
    const newDrugs = allDrugs.filter((item) => item.id !== drugId);
    setData("drugs", newDrugs);
    setAllDrugs(newDrugs);
  };

  const drugExist = (drugs, newDrug) => {
    const foundDrug = drugs.find(
      (drug) =>
        drug.drugName === newDrug.drugName &&
        drug.labName === newDrug.labName &&
        drug.dosage === newDrug.dosage &&
        drug.price === newDrug.price &&
        drug.controlled === newDrug.controlled &&
        drug.description === newDrug.description
    );
    return foundDrug ? true : false;
  };
  
  useEffect(() => {
    const drugs = getDrugs();
    setAllDrugs(drugs);
  }, [allDrugs.length]);

  return (
    <MedicineContext.Provider
      value={{
        allDrugs,
        addDrug,
        deleteDrug,
      }}
    >
      {children}
    </MedicineContext.Provider>
  );
};
MedicineProvider.propTypes = {
  children: PropTypes.node,
};
