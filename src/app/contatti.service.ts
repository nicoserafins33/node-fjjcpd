// contatti.service.ts

import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {
  private contacts: Contact[] = [];

  aggiungiContatto(contatto: Contact) {
    this.contacts.push(contatto);
  }

  ottieniContattiUtente(idUtente: string): Contact[] {
    return this.contacts.filter(contatto => contatto.idUtente === idUtente);
  }
}
