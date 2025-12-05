// src/app/services/login.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() {}

  login(email: string, password: string): Observable<boolean> {
    console.log('Authenticating:', email, password);

    // Simulate backend login logic
    if (email === 'admin@example.com' && password === 'admin123') {
      return of(true);  // Login success
    } else {
      return of(false); // Login failed
    }
  }
}
