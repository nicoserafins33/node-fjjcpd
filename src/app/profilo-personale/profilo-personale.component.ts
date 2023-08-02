// profilo-personale.component.ts

import { Component } from '@angular/core';
import { ContattiService } from './contatti.service';
import { Contact } from './contact.model';

@Component({
  selector: 'app-profilo-personale',
  templateUrl: './profilo-personale.component.html',
  styleUrls: ['./profilo-personale.component.css']
})
export class ProfiloPersonaleComponent {
  contatto: Contact = {
    id: 0,
    idUtente: 'ID_UTENTE_CORRENTE', // Inserisci l'ID dell'utente corrente, ottenuto dall'autenticazione
    nome: '',
    cognome: '',
    titoloLavoro: '',
    partitaIVA: '',
    nomeAzienda: '',
    indirizzoAzienda: '',
    provinciaResidenza: '',
    numeroTelefono: '',
    email: '',
    interessi: {
      webDesign: false,
      appDevelopment: false,
      marketing: false
    }
  };

  constructor(private contattiService: ContattiService) {}

  onSalvaContatto() {
    this.contattiService.aggiungiContatto(this.contatto);
    // Puoi implementare un messaggio di successo o pulire il form dopo aver salvato il contatto
    this.contatto = {
      id: 0,
      idUtente: 'ID_UTENTE_CORRENTE',
      nome: '',
      cognome: '',
      titoloLavoro: '',
      partitaIVA: '',
      nomeAzienda: '',
      indirizzoAzienda: '',
      provinciaResidenza: '',
      numeroTelefono: '',
      email: '',
      interessi: {
        webDesign: false,
        appDevelopment: false,
        marketing: false
      }
    };
  }
}
