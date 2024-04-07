import { Injectable } from '@angular/core';
import { DatabaseAdapter } from '../adapters/database.adapter';

@Injectable({
  providedIn: 'root'
})
export class DatabasePort {

  constructor(private databaseAdapter: DatabaseAdapter) { }

  async createUser(user: any): Promise<any> {
    return this.databaseAdapter.createUser(user);
  }

  async getUsers(): Promise<any[]> {
    return this.databaseAdapter.getUsers();
  }

  async updateUser(userId: string, updates: any): Promise<void> {
    return this.databaseAdapter.updateUser(userId, updates);
  }

  async deleteUser(userId: any): Promise<void> {
    return this.databaseAdapter.deleteUser(userId);
  }
}
