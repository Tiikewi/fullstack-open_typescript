import express from 'express'
import { getPatients, getPatientById, addPatient } from '../services/patientService'
import toNewPatientEntry from '../utils'

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
    const newPatientEntry = toNewPatientEntry(req.body)
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

export default router
