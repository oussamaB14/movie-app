import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sginin',
  templateUrl: './sginin.page.html',
  styleUrls: ['./sginin.page.scss'],
})
export class SgininPage {
  email = '';
  password = '';
  constructor(private authService: AuthService) {}

  signin() {
    console.log('Signing in with email:', this.email, 'and password:', this.password);
    this.authService.login(this.email, this.password).then(() => {
      console.log('Signed in successfully');
      window.location.href = '/';
    }).catch(error => {
      console.error('Error signing in:', error);
    });
  }
}
