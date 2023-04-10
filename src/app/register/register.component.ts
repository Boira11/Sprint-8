import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RegisterForm } from '../interfaces/register-form';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: RegisterForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
  };


  constructor(private authService: AuthService, private router: Router) {}
  

  onSubmit() {
    const success = this.authService.register(this.registerForm);
    if (success) {
      alert('Registro exitoso');
      this.router.navigate(['/']);
    } else {
      alert('Error en el registro');
    }
  }

  
  
}