import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCustomer(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  addCustomer(customer: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, customer)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
