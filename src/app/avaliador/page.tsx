'use client'
import styles from './page.module.css';

import IdDocument from './components/documents/id';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { IDocuments } from './interfaces/documents.interfaces';
import DriverLicense from './components/documents/driverLicense';
import WorkVisa from './components/documents/workVisa';

import api from '@/app/config/api';

const randomNumberInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Home() {
  const [doc, setDoc] = useState<IDocuments>({});

  useEffect(() => getDocs(), []);

  const getDocs = () => {
    api.get("/documents/random")
    .then((res) => {
      const data = res.data as IDocuments;
      if (data.id?.dateBirth != undefined) {
        data.id.dateBirth = moment(data.id?.dateBirth);
      }

      if (data.id?.dateValidate != undefined) {
        data.id.dateValidate = moment(data.id?.dateValidate);
      }
      
      if (data.driverLicense?.dateValidate != undefined) {
        data.driverLicense.dateValidate = moment(data.driverLicense?.dateValidate);
      }

      setDoc(data);
    });
  }

  const handleNext = () => {
    getDocs();
  }

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Avaliador de entraada</h1>
      </div>
      <div className={styles.drag_documents_area}>
        {
          doc.id &&
          <IdDocument
            name={doc.id?.name || ''}
            cpf={doc.id?.cpf || ''}
            dateBirth={doc.id?.dateBirth || moment()}
            dateValidate={doc.id?.dateValidate || moment()} />
        }
        {
          doc.driverLicense &&
          <DriverLicense
            name={doc.driverLicense?.name || ''}
            dateValidate={doc.driverLicense?.dateValidate || moment()}
            cpf={doc.driverLicense?.cpf || ''} />
        }
        {/* {
          doc &&
          <WorkVisa
            name={doc.workVisa?.name || ''}
            dateValidate={doc.workVisa?.dateValidate || moment()}
            cnpj={doc.workVisa?.cnpj || ''} />
        } */}
      </div>
      <button onClick={handleNext}>Próximo</button>
    </main>
  )
}
