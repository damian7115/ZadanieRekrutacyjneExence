import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
 url= 'http://numbersapi.com/1..3,'

  constructor(private http: HttpClient) { }


getRest(pesel) {

  return this.http.get(this.url +pesel)
    
    
  
}
;
}

