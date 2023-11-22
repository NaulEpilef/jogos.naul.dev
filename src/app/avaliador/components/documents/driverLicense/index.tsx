import { IDriverLicenseDocument } from '@/app/avaliador/interfaces/documents.interfaces'

import styles from './id.module.css'

export default function DriverLicense({ name, dateValidate, cpf }: IDriverLicenseDocument) {
  return (
    <div className={styles.paper}>
      <h1>Habilitação</h1>
      <div className={styles.inLine}>
        <div className={styles.field}>
          <span className={styles.fieldTitle}>Nome</span>
          <span className={styles.fieldBody}>{name}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.fieldTitle}>CPF</span>
          <span className={styles.fieldBody}>{cpf}</span>
        </div>
      </div>
      <div className={styles.fullLine}>
        <div className={styles.field}>
          <span className={styles.fieldTitle}>Validade</span>
          <span className={styles.fieldBody}>{dateValidate.format("DD/MM/YYYY")}</span>
        </div>
      </div>
    </div>
  )
}
