import { IDriverLicenseDocument } from '@/app/avaliador/interfaces/documents.interfaces'

import styles from './id.module.css'
import { FieldBodyStyled, FieldStyled, FieldTitleStyled, PaperStyled } from '../../styled/documents/DocumentStyled'

export default function DriverLicense({ name, dateValidate, cpf }: IDriverLicenseDocument) {
  return (
    <PaperStyled bgcolor='chartreuse' height='15em' width='25em'>
      <h1>Habilitação</h1>
      <div className={styles.fullLine}>
        <FieldStyled amountInLine={1}>
          <FieldTitleStyled>Nome</FieldTitleStyled>
          <FieldBodyStyled>{name}</FieldBodyStyled>
        </FieldStyled>
      </div>
      <div className={styles.inLine}>
        <FieldStyled amountInLine={2}>
          <FieldTitleStyled>CPF</FieldTitleStyled>
          <FieldBodyStyled>{cpf}</FieldBodyStyled>
        </FieldStyled>
        <FieldStyled amountInLine={2}>
          <FieldTitleStyled>Validade</FieldTitleStyled>
          <FieldBodyStyled>{dateValidate.format("DD/MM/YYYY")}</FieldBodyStyled>
        </FieldStyled>
      </div>
    </PaperStyled>
  )
}
