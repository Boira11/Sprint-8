import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { RegisterForm } from '../interfaces/register-form';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: RegisterForm | null = null;
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  public loggedIn$ = this.loggedInSubject.asObservable();
  constructor() {}

  register(user: RegisterForm): boolean {
    const existingUser = localStorage.getItem(`user_${user.email}`);
    if (existingUser) {
      return false;
    }
    localStorage.setItem(`user_${user.email}`, JSON.stringify(user));
    this.currentUser = user;
    return true;
  }

  login(email: string, password: string): boolean {
    const storedUser = localStorage.getItem(`user_${email}`);
    if (storedUser) {
      const user: RegisterForm = JSON.parse(storedUser);
      if (user.password === password) {
        this.currentUser = user;
        this.loggedInSubject.next(true);
        return true;
      }
    }
    return false;
  }
  

  logout(): void {
    this.currentUser = null;
    this.loggedInSubject.next(false);
  }

  getCurrentUser(): RegisterForm | null {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }
}