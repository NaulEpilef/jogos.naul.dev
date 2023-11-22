import { IIdDocument } from '@/app/avaliador/interfaces/documents.interfaces'

import styles from './id.module.css'

export default function Id({ name, dateBirth, dateValidate, cpf }: IIdDocument) {
  return (
    <div className={styles.paper}>
      <h1>Identidade</h1>
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
      <div className={styles.inLine}>
        <div className={styles.field}>
          <span className={styles.fieldTitle}>Validade</span>
          <span className={styles.fieldBody}>{dateValidate.format("DD/MM/YYYY")}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.fieldTitle}>Nascimento</span>
          <span className={styles.fieldBody}>{dateBirth.format("DD/MM/YYYY")}</span>
        </div>
      </div>
    </div>
  )
}
