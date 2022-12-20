import express from 'express'
import { getPatients, getPatientById, addPatient, addEntry } from '../services/patientService'
import { Patient } from '../types'
import {toNewEntry, toNewPatient} from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(getPatients())
})

router.get('/:id', (_req, res) => {
  res.send(getPatientById(_req.params.id))
})

router.post('/', (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newPatientEntry = toNewPatient(req.body)
    const addedEntry = addPatient(newPatientEntry)
    res.json(addedEntry)
  } catch (e: unknown) {
    let errorMsg = 'Something went wrong'
    if (e instanceof Error) {
      errorMsg += ' Error: ' + e.message
    }
    res.status(400).send(errorMsg)
  }
})

router.post('/:id/entries', (req, res) => {
  const { id } = req.params;
  const patient: Patient | undefined = getPatientById(id);
  if (!patient) throw new Error("Cannot get patient");
  try {
    const newEntry = toNewEntry(req.body);
    const addedEntry = addEntry(patient, newEntry);
    res.json(addedEntry);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Undefined error';
    res.status(400).send(errorMessage);
  }
});


export default router
