import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  
  username = '';
  password = '';
  email = '';


  constructor(private router: Router, private authService: AuthService) {}

  onSubmit(): void {
    this.authService.register(this.username, this.password, this.email).subscribe(users => {
      console.log(users);
    });
    this.router.navigate(['/login']);
  }

  onLoginButtonClick(){
    this.onSubmit();
  }
}
