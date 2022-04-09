import patientData from "../../data/patients.json";
import { PatientEntry } from "../types";

const patients: Omit<PatientEntry, "ssn">[] = patientData;
console.log("patients:", patients);

const getEntries = (): Omit<PatientEntry, "ssn">[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = () => {
  return null;
};

export default { getEntries, addPatient };
