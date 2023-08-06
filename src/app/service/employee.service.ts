import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseApiUrl: string = 'https://localhost:7029'
 

  constructor(private http:HttpClient) { 
    
  }
  
  addemployee(addEmployeeRequest: any): Observable<any> {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<any>(this.baseApiUrl + '/api/Employee', addEmployeeRequest) 
  }

  getAllEmployee(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/Employee/GetAll')
}
updateEmployee(Employee:any ):Observable<any>{
  return this.http.put<any>(this.baseApiUrl + '/api/Employee' ,Employee)
}
// updateEmployee(id: string, employee: any): Observable<any> {
//   return this.http.put<any>(this.baseApiUrl + '/api/employee?id=' + id, employee)
// }
deleteEmployee(id:string):Observable<any>{
  return this.http.delete<any>(this.baseApiUrl + '/api/Employee?id=' +id)
}
}

