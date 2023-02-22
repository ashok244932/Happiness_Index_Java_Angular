import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Surveyform } from './surveyform';

@Injectable({
  providedIn: 'root'
})
export class HappinessService {

  private baseURL="http://localhost:8080/api/v1/happinessdetail";

  constructor(private httpClient : HttpClient) { }

  createHappinessDetail(surveyForm : Surveyform): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`,surveyForm);
  }

  getHappinessDetail(name: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}?name=${name}`);
  }
}
