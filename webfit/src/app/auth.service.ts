import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    {username: 'admin', password: 'admin123',email: 'asd@gmail.com'},
    {username: 'admin2', password: 'admin321',email: 'dsa@gmail.com'},
    {username: 'mark', password: 'natalia',email: 'knm@gmail.com'}
  ];

  constructor() {}

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }

  register(username: string, password: string, email: string): Observable<any[]> {
    const newUser = { username, password, email };
    this.users.push(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    return of(this.users);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

}
