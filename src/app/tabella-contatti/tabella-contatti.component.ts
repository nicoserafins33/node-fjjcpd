// tabella-contatti.component.ts

import { Component } from '@angular/core';
import { ContattiService } from './contatti.service';
import { Contact } from './contact.model';

@Component({
  selector: 'app-tabella-contatti',
  templateUrl: './tabella-contatti.component.html',
  styleUrls: ['./tabella-contatti.component.css']
})
export class TabellaContattiComponent {
  contattiUtente: Contact[] = [];

  constructor(private contattiService: ContattiService) {
    // Recupera l'ID dell'utente corrente dall'autenticazione
    const idUtenteCorrente = 'ID_UTENTE_CORRENTE';
    this.contattiUtente = this.contattiService.ottieniContattiUtente(idUtenteCorrente);
  }
}
