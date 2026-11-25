import { Component, inject } from '@angular/core';
import { BG_URL } from '../../app.config';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from '@openng/ngx-toastr';

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
  private toastr = inject(ToastrService);

  showSuccess() {
    this.toastr.success('Logged in successfully!', 'Success');
  }
  private readonly loginService = inject(LoginService);
  router = inject(Router);
  onSubmit() {
    if (!this.email || !this.password) {
      this.toastr.error('login failed!', 'Error');
    } else {
      this.toastr.success('Logged in successfully!', 'Success');
      this.router.navigateByUrl('/browse');
    }
  }
}
