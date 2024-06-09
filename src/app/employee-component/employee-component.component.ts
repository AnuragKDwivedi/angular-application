import { Component } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent {

  constructor(private service : EmployeeServiceService){

  }

  public getEmployee(){
      return this.service.getEmployees();
  }

}
