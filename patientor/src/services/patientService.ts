import { v1 as uuid } from 'uuid'
import patientData from '../../data/patients'
import { Patient, NewPatient, PublicPatient, NewEntry, Entry } from '../types'

const patients: Patient[] = patientData;

export const getPatients = (): PublicPatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }))
}

export const getPatientById = (id: string): Patient | undefined => {
  let patient = patients.find((p) => p.id === id)
  console.log(patient?.entries)
  return patient
}

export const addPatient = (patient: NewPatient): Patient => {
  const newPatient: Patient = {
    id: (patients.length + 1).toString(),
    ...patient,
  }

  patients.push(newPatient)
  return newPatient
}

export const addEntry = (patient: Patient, newEntry: NewEntry): Patient => {
  const id = uuid()

  const entryToAdd: Entry = {
    ...newEntry,
    id,
  }
  patient.entries.push(entryToAdd)

  return patient
}
