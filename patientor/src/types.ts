export interface Diagnosis {
  code: string
  name: string
  latin?: string
}

export interface BaseEntry {
  id: string
  description: string
  date: string
  specialist: string
  diagnosisCodes?: Array<Diagnosis['code']>
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export enum HealthCheckRating {
  'Healthy',
  'LowRisk',
  'HighRisk',
  'CriticalRisk',
}

export interface HealthCheckEntry extends BaseEntry {
  type: 'HealthCheck'
  healthCheckRating: HealthCheckRating
}

export type Discharge = { date: string; criteria: string }
export type SickLeave = { startDate: string; endDate: string }

export interface OccupationalHealthcareEntry extends BaseEntry {
  type: 'OccupationalHealthcare'
  employerName: string
  sickLeave?: { startDate: string; endDate: string }
}

export interface HospitalEntry extends BaseEntry {
  type: 'Hospital'
  discharge?: Discharge
}

export type Entry = HospitalEntry | OccupationalHealthcareEntry | HealthCheckEntry

export type NewEntry =
  | Omit<HospitalEntry, 'id'>
  | Omit<OccupationalHealthcareEntry, 'id'>
  | Omit<HealthCheckEntry, 'id'>

export interface Patient {
  id: string
  name: string
  ssn: string
  dateOfBirth: string
  gender: string
  occupation: string
  entries: Entry[]
}

export type NewPatient = Omit<Patient, 'id'>
export type PublicPatient = Omit<Patient, 'ssn' | 'entries'>
