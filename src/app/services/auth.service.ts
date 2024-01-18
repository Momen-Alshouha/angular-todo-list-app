import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  register(username: string,email:string, password: string,confirmPass : string): boolean {
    this.isAuthenticated = true;
    return true;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
  }
}
