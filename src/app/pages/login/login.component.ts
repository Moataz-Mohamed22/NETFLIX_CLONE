import { Component, inject } from '@angular/core';
import { BG_URL } from '../../app.config';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';


@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.component.css',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  logo = '/NetflixLogoSvg.png';
  BG_Img = BG_URL;
  email!: string;
  password!: string;
  private readonly loginService = inject(LoginService);
  router = inject(Router);
  onSubmit() {
    if (!this.email || !this.password) {
      alert('Enter your email or password');
      return;
    }
    this.loginService.login(this.email, this.password);
    this.router.navigateByUrl('/browse');
  }
}
