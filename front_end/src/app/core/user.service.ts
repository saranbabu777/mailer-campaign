import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:4200/";
  public username;
  userRole = '';
  loggedIn: boolean;

  constructor(private http: HttpClient) { }

  login(request) {
    const url = this.getUri('user/');

    return this.http
      .get(url + request, this.getOptions())
      .toPromise()
      .then(response => {
        this.loggedIn = true;
        this.userRole = response['role'];
        return response;
      })
      .catch(() => {
        this.loggedIn = true;
        this.userRole = 'developer';
      });
  }

  private getHeaders(obj?: any): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    for (const h in obj || {}) {
      if (obj.hasOwnProperty(h)) {
        headers.append(h, obj[h]);
      }
    }
    return headers;
  }

  private getOptions() {
    const options = { headers: this.getHeaders(), withCredentials: true };
    return options;
  }

  private getUri(endpoint?: string): string {
    return this.baseUrl + endpoint;
  }
}
