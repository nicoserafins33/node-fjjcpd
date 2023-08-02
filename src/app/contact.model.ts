// contact.model.ts

export interface Contact {
  id: number;
  idUtente: string;
  nome: string;
  cognome: string;
  titoloLavoro: string;
  partitaIVA: string;
  nomeAzienda: string;
  indirizzoAzienda: string;
  provinciaResidenza: string;
  numeroTelefono: string;
  email: string;
  interessi: {
    webDesign: boolean;
    appDevelopment: boolean;
    marketing: boolean;
  };
}
