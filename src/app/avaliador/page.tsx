'use client'
import styles from './page.module.css';

import IdDocument from './components/documents/id';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { IDocuments } from './interfaces/documents.interface';
import DriverLicense from './components/documents/driverLicense';
import WorkVisa from './components/documents/workVisa';

import api from '@/app/config/api';

const randomNumberInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Home() {
  const [allDocs, setAllDocs] = useState<IDocuments[]>([]);
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    api.get("/documents/random")
    .then((res) => {
      const data = res.data as IDocuments[];
      const docs: IDocuments[] = data.map(d => {
        if (d.id?.dateValidate != undefined) {
          d.id.dateValidate = moment(d.id?.dateValidate);
        }
        
        if (d.driverLicense?.dateValidate != undefined) {
          d.driverLicense.dateValidate = moment(d.driverLicense?.dateValidate);
        }
        
        if (d.workVisa?.dateValidate != undefined) {
          d.workVisa.dateValidate = moment(d.workVisa?.dateValidate);
        }

        return d;
      });
      
      setAllDocs(docs);
    });
  }, []);

  // useEffect(() => {
  //   console.log(allDocs);
  // }, [allDocs]);

  const handleNext = () => {
    if (current < allDocs.length - 1) {
      setCurrent(current + 1);
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Avaliador de entraada</h1>
      </div>
      <div className={styles.drag_documents_area}>
        {
          allDocs[current] &&
          <IdDocument
            name={allDocs[current].id?.name || ''}
            dateValidate={allDocs[current].id?.dateValidate || moment()}
            cpf={allDocs[current].id?.cpf || ''} />
        }
        {
          allDocs[current] &&
          <DriverLicense
            name={allDocs[current].driverLicense?.name || ''}
            dateValidate={allDocs[current].driverLicense?.dateValidate || moment()}
            cnh={allDocs[current].driverLicense?.cnh || ''} />
        }
        {
          allDocs[current] &&
          <WorkVisa
            name={allDocs[current].workVisa?.name || ''}
            dateValidate={allDocs[current].workVisa?.dateValidate || moment()}
            cnpj={allDocs[current].workVisa?.cnpj || ''} />
        }
      </div>
      <button onClick={handleNext}>Próximo</button>
    </main>
  )
}
