import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RewardsService {
  private baseUrl = 'http://localhost:8080/customers';

  constructor(private http: HttpClient) {}

  getRewardsByCustomerId(customerId: number) {
    return this.http.get(`${this.baseUrl}/${customerId}/rewards`);
  }
}
