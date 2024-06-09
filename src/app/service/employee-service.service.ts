import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  public getEmployees(){
    this.http.get('https://localhost:8080/api/employee').subscribe(data => {
      console.log(data);
    });
  }
}
