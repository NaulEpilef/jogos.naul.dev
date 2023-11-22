import { IWorkVisaDocument } from '@/app/avaliador/interfaces/documents.interfaces'

import styles from './id.module.css'

export default function WorkVisa({ name, dateValidate, cnpj }: IWorkVisaDocument) {
  return (
    <div className={styles.paper}>
      <h1>Visto de trabalho</h1>
      <div className={styles.inLine}>
        <div className={styles.field}>
          <span className={styles.fieldTitle}>Nome</span>
          <span className={styles.fieldBody}>{name}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.fieldTitle}>Validade</span>
          <span className={styles.fieldBody}>{dateValidate.format("DD/MM/YYYY")}</span>
        </div>
      </div>
      <div className={styles.fullLine}>
        <div className={styles.field}>
          <span className={styles.fieldTitle}>CNPJ</span>
          <span className={styles.fieldBody}>{cnpj}</span>
        </div>
      </div>
    </div>
  )
}
