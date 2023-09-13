import { Component } from '@angular/core';
import { Route , Router } from '@angular/router';
import { Fooldal2Component } from '../fooldal2/fooldal2.component';

@Component({
  selector: 'app-fooldal',
  templateUrl: './fooldal.component.html',
  styleUrls: ['./fooldal.component.css']
})
export class FooldalComponent {

  constructor(private router: Router) {
    
  }
    username = '';
    testsuly = 0;
    magassag = 0;
    eletkor = 0;
    napimozgas = 0;
    nemed = true;
    bmiValue!: number;
    bmrValue!: number;

  calculateBMI(testsuly: number, magassag: number): number {
    const heightInMeters = magassag /100;
    const bmi = (testsuly / (heightInMeters * heightInMeters));
    return bmi;
  }

  calculateBMR(testsuly: number, magassag: number, eletkor: number, isMale: boolean): number {
    if (isMale) {
      return 88.362 + (13.397 * testsuly) + (4.799 * magassag) - (5.677 * eletkor);
    } else {
      return 447.593 + (9.247 * testsuly) + (3.098 * magassag) - (4.330 * eletkor);
    }
  }

  getBMI(): number {
    return this.calculateBMI(this.testsuly, this.magassag);
  }

  getBMR(): number {
    return this.calculateBMR(this.testsuly, this.magassag, this.eletkor, true); // Assuming male gender for simplicity
  }

  onNextButtonClick(){
    this.router.navigate(['../fooldal2']);
    const bmi = this.getBMI();
    const bmr = this.getBMR();
    console.log('BMI:', bmi);
    console.log('BMR:', bmr ,'Calories');
    this.router.navigate(['../fooldal2'], { queryParams: { bmi: bmi, bmr: bmr } });
  
  }

}
