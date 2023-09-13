import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FooldalComponent } from '../fooldal/fooldal.component';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' , ]
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router, private authService: AuthService) {}
  
  username!:"";
  password!:"";

  onSubmit(): void {
    if (this.authService.login(this.username, this.password)) {
      // Navigate to the home page if login is successful
      this.router.navigate(['/fooldal']);
    } else {
      alert('Invalid username or password');
    }
  }

  onLoginButtonClick(){
    this.onSubmit();
  }
  onRegisterButtonClick(){
    this.router.navigate(['/register']);
  }

  ngOnInit() {
    
  }

  
}

