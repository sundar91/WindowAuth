import { Injectable, Inject, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AccountService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiUrl: string
  ) { }

  getUser(): Observable<string> {
    let serviceUrl: string = `${this.apiUrl}user`;
    return this.http.get(serviceUrl, { responseType: "text" });
  }
}
