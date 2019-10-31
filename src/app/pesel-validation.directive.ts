import { AbstractControl } from '@angular/forms';

export function ValidatePesel(control: AbstractControl) {
  
  let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  let sum = 0;
  let controlNumber = parseInt(control.value.substring(10, 11));
  for (let i = 0; i < weight.length; i++) {
      sum += (parseInt(control.value.substring(i, i + 1)) * weight[i]);
  }
  sum = sum % 10;
  if(10 - sum !== controlNumber)
  return { 'pesel': true };
  else return null;
}
