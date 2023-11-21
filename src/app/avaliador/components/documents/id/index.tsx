import { IIdDocument } from '@/app/avaliador/interfaces/documents.interface'

import styles from './id.module.css'

export default function Id({ name, dateValidate, cpf }: IIdDocument) {
  return (
    <div className={styles.paper}>
      <h1>Identidade</h1>
      <div>
        <span>Name:</span>
        <span>{name}</span>
      </div>
      <div>
        <span>Validade:</span>
        <span>{dateValidate.format("DD/MM/YYYY")}</span>
      </div>
      <div>
        <span>CPF:</span>
        <span>{cpf}</span>
      </div>
    </div>
  )
}
