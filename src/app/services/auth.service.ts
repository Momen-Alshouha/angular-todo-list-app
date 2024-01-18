import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private apiUrl = 'api/users';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}`).pipe(
      catchError(() => []),
      map((users) => {
        const matchingUser = users.find((user) => user.username === username && user.password === password);

        if (matchingUser) {
          this.isAuthenticated = true;
          return true;
        }
        return false;
      })
    );
  }

  register(username: string, email: string, password: string, confirmPassword: string): Observable<any> {
    const user = { username, email, password, confirmPassword };
    return this.http.post<any>(this.apiUrl, user).pipe(
      map((response) => {
        // Check the server response for successful registration
        this.isAuthenticated = true;
        return response; // You might want to return more information about the registration
      })
    );
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
