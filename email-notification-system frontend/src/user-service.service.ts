import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  login(email: string) {
    const loginRequest = { email: email };
    return this.http.post(`${this.apiUrl}/login`, loginRequest);
  }
}