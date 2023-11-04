import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user-service.service';

@Component({
  // selector: 'app-login-component',
  // templateUrl: './login-component.component.html',
  // styleUrls: ['./login-component.component.css']
  selector: 'app-login',
  template: `
    <h2>Login</h2>
    <input type="email" (ngModel)=email placeholder="Email">
    <button (click)="login()">Login</button>
  `
})
export class LoginComponentComponent implements OnInit {
  email!: string;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login() {
    this.userService.login(this.email).subscribe(
      () => {
        alert('Login successful');
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

}
