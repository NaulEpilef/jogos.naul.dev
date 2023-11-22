import { IWorkVisaDocument } from '@/app/avaliador/interfaces/documents.interfaces'

import styles from './id.module.css'

export default function WorkVisa({ name, dateValidate, cnpj }: IWorkVisaDocument) {
  return (
    <div className={styles.paper}>
      <h1>Visto de trabalho</h1>
      <div>
        <span>Name:</span>
        <span>{name}</span>
      </div>
      <div>
        <span>Validade:</span>
        <span>{dateValidate.format("DD/MM/YYYY")}</span>
      </div>
      <div>
        <span>CNPJ:</span>
        <span>{cnpj}</span>
      </div>
    </div>
  )
}
