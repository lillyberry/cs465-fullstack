import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login implements OnInit {

  public formError: string = '';
  submitted = false;
  credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void { }

  // Method called when Sign-In! button is clicked
  public onLoginSubmit(): void {
    this.formError = '';

    if (!this.credentials.email || !this.credentials.password || !this.credentials.name) {
      this.formError = 'All fields are required, please try again';
      this.router.navigateByUrl('#'); // Return to login page
    } else {
      this.doLogin();
    }
  }

  // Handles the actual login process
  private doLogin(): void {
    let newUser = {
      name: this.credentials.name,
      email: this.credentials.email
    } as User;

    // Call login on the authentication service
    this.authenticationService.login(newUser, this.credentials.password);

    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['']); // Redirect after successful login
    } else {
      // Wait a bit and check again for asynchronous completion
      var timer = setTimeout(() => {
        if (this.authenticationService.isLoggedIn()) {
          this.router.navigate(['']);
        }
      }, 3000);
    }
  }
}
