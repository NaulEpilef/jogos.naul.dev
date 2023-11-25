import { IIdDocument } from '@/app/avaliador/interfaces/documents.interfaces'

import styles from './id.module.css'
import { FieldBodyStyled, FieldStyled, FieldTitleStyled, PaperStyled } from '../../styled/documents/DocumentStyled'

export default function Id({ name, dateBirth, dateValidate, cpf }: IIdDocument) {
  return (
    <PaperStyled>
      <h1>Identidade</h1>
      <div className={styles.inLine}>
        <FieldStyled>
          <FieldTitleStyled>Nome</FieldTitleStyled>
          <FieldBodyStyled>{name}</FieldBodyStyled>
        </FieldStyled>
        <FieldStyled>
          <FieldTitleStyled>CPF</FieldTitleStyled>
          <FieldBodyStyled>{cpf}</FieldBodyStyled>
        </FieldStyled>
      </div>
      <div className={styles.inLine}>
        <FieldStyled>
          <FieldTitleStyled>Validade</FieldTitleStyled>
          <FieldBodyStyled>{dateValidate.format("DD/MM/YYYY")}</FieldBodyStyled>
        </FieldStyled>
        <FieldStyled>
          <FieldTitleStyled>Nascimento</FieldTitleStyled>
          <FieldBodyStyled>{dateBirth.format("DD/MM/YYYY")}</FieldBodyStyled>
        </FieldStyled>
      </div>
    </PaperStyled>
  )
}
