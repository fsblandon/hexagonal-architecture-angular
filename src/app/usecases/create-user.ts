import { Injectable } from '@angular/core';
import { DatabasePort } from '../ports/database.port';

@Injectable({
  providedIn: 'root'
})
export class CreateUser {

  constructor(private databasePort: DatabasePort) { }

  async execute(user: any) {
    try {
      return await this.databasePort.createUser(user);
    } catch(error) {
      throw error;
    }
  }
}
