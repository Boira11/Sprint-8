import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginForm } from '../interfaces/login-form';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: LoginForm = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService,  private router: Router) {}

  onSubmit() {
    const success = this.authService.login(this.loginForm.email, this.loginForm.password);
    if (success) {
      alert('Inicio de sesion realizado con exito');
      this.router.navigate(['/']);
      // Redirige a la página principal o a donde desees después del inicio de sesión exitoso
      
    } else {
      alert('Error en el inicio de sesión');
    }
  }
}