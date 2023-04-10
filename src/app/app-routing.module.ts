
import { StarshipDetails } from './interfaces/StarshipDetails ';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipsComponent } from './ships-component/ships-component.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';




const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'ships', component: ShipsComponent, canActivate: [AuthGuard] },
    { path: 'starship/:id', component: StarshipDetailsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
