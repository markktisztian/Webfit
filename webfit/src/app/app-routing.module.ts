import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { RegisterComponent } from './register/register.component';
import { Fooldal2Component } from './fooldal2/fooldal2.component';
import { FogyComponent } from './fogy/fogy.component';
import {IzomComponent} from './izom/izom.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  { path: 'fooldal', component: FooldalComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'fooldal2', component: Fooldal2Component },
  { path: 'fogy', component: FogyComponent },
  { path: 'izom', component: IzomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
