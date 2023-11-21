'use client'
import styles from './page.module.css';

import IdDocument from './components/documents/id';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { IDocuments } from './interfaces/documents.interface';
import DriverLicense from './components/documents/driverLicense';
import WorkVisa from './components/documents/workVisa';

const randomNumberInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Home() {
  const [allDocs, setAllDocs] = useState<IDocuments[]>([]);
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const names = ["Naul", "Elder", "Fan", "Jason"];
    const d = [] as IDocuments[];
    names.forEach(n => {
      const docs = {
        id: {
          cpf: crypto.randomUUID(),
          name: n,
          dateValidate: moment().locale("pt-br").add(randomNumberInRange(-6, 6), 'd'),
        },
        driverLicense: {
          cnh: crypto.randomUUID(),
          name: n,
          dateValidate: moment().locale("pt-br").add(randomNumberInRange(-6, 6), 'd'),
        },
        workVisa: {
          cnpj: crypto.randomUUID(),
          name: n,
          dateValidate: moment().locale("pt-br").add(randomNumberInRange(-6, 6), 'd'),
        }
      } as IDocuments;
      d.push(docs);
    });

    setAllDocs(d);
  }, []);

  useEffect(() => {
    console.log(allDocs);
  }, [allDocs]);

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
