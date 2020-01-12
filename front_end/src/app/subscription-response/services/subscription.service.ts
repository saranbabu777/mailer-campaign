import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private baseUrl = "http://localhost:8200/";

  constructor(private http: HttpClient) { }

  subscribe() {
    const url = this.getUri('subscribe');

    return this.http
      .get(url, this.getOptions())
      .toPromise()
      .then(() => { })
      .catch(() => { });
  }

  unsubscribe() {
    const url = this.getUri('unsubscribe');

    return this.http
      .get(url, this.getOptions())
      .toPromise()
      .then(() => { })
      .catch(() => { });
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
