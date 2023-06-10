import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/employees', data);
  }

  getEmployeeDetails(): Observable<any> {
    return this.http.get('http://localhost:3000/employees');
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/employees/${id}`);
  }

  updateEmployee(id: number, data: any): Observable<unknown> {
    return this.http.patch(`http://localhost:3000/employees/${id}`, data);
  }
}
