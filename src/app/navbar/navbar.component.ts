import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private loggedIn = false;
  private loggedInSubscription: Subscription | null = null;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.loggedInSubscription = this.authService.loggedIn$.subscribe(
      (loggedIn) => {
        this.loggedIn = loggedIn;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.loggedInSubscription) {
      this.loggedInSubscription.unsubscribe();
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  getCurrentUser(): string {
    const user = this.authService.getCurrentUser();
    return user ? user.firstName : '';
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
