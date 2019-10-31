import { Component } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule, Validators, FormBuilder  } from '@angular/forms';
import { ValidatePesel } from './pesel-validation.directive';
import { RestService } from './rest.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Zadanie rekrutacyjne Exence';
  zadanieForm: FormGroup;
response:string;
  

  constructor(private formBuilder: FormBuilder, private restService:RestService ) { }
  // zawsze ngOnInit wywpouje sie w momencie wejscia do komponentu
  ngOnInit() {
    this.zadanieForm = this.formBuilder.group({
      //walidacja wedlug tutoriala//
      // https://dzone.com/articles/how-to-create-custom-validators-in-angular//
      pesel:['', [Validators.required,Validators.maxLength(11),ValidatePesel]],
    }, {
    });
}
clearChild(){
this.response=null
// fukcja czyszczenia dziecka//
}

  onSubmit() {
    this.restService.getRest(this.zadanieForm.get('pesel').value)
    .subscribe((data: any) => 
    this.response = data[this.zadanieForm.get('pesel').value]
); 

  }
  // Usługa Restowa// 
}
