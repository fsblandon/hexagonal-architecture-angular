import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatabaseAdapter {

  constructor(private http: HttpClient) { }

  async createUser(user: any): Promise<any> {
    return this.http.post('api/users', user);
  }

  async getUsers(): Promise<any[]> {
    return this.http.get('api/users');
  }

  async updateUser(userId: string, updates: any): Promise<void> {
    return this.http.patch(`/api/users/${userId}`, updates);
  }

  async deleteUser(userId: string): Promise<any> {
    return this.http.delete(`/api/users/${userId}`);
  }
}
