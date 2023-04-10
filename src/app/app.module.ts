import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShipsComponent } from './ships-component/ships-component.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PilotCardComponent } from './pilot-card/pilot-card.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { MovieCardComponent } from './movie-card/movie-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ShipsComponent,
    StarshipDetailsComponent,
    WelcomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    PilotCardComponent,
    MovieCardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    FormsModule,
    AccordionModule.forRoot(),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
