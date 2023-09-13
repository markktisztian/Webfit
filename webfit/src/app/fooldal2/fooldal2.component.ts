import { Component} from '@angular/core';
import { FogyComponent } from '../fogy/fogy.component';
import { IzomComponent } from '../izom/izom.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-fooldal2',
  templateUrl: './fooldal2.component.html',
  styleUrls: ['./fooldal2.component.css']
})
export class Fooldal2Component {
    bmiValue2!: number;
    bmiValue!: number;
    bmrValue!: number;
    
    constructor(private route: ActivatedRoute , private router: Router) { }

    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
          this.bmiValue = params['bmi'];
          this.bmrValue = params['bmr'] ;
          console.log('BMI:', this.bmiValue);
          console.log('BMR:', this.bmrValue);
      });
      /*if (this.bmiValue2 > 18.5 &&this. bmiValue2 < 24.9 ) {
        this.bmiValue = this.bmiValue2 ,'Ideal Weight'
      } else if (this.bmiValue2 > 25){
        this.bmiValue = this.bmiValue2 ,'Overweight'
      } else {
        this.bmiValue = this.bmiValue2, 'Underweight'
      }*/
    }
    
  onWeightButtonClick(){
    this.router.navigate(['../fogy']);
  }

  onMuscleButtonClick(){
    this.router.navigate(['../izom']);
  }

}
