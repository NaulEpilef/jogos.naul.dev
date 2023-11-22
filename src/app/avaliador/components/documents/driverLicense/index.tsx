import { IDriverLicenseDocument } from '@/app/avaliador/interfaces/documents.interfaces'

import styles from './id.module.css'

export default function DriverLicense({ name, dateValidate, cnh }: IDriverLicenseDocument) {
  return (
    <div className={styles.paper}>
      <h1>Habilitação</h1>
      <div>
        <span>Name:</span>
        <span>{name}</span>
      </div>
      <div>
        <span>Validade:</span>
        <span>{dateValidate.format("DD/MM/YYYY")}</span>
      </div>
      <div>
        <span>CNH:</span>
        <span>{cnh}</span>
      </div>
    </div>
  )
}
