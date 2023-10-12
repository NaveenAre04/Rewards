import { Component, OnInit } from '@angular/core';
import { RewardsService } from '../services/rewards.service';

@Component({
  selector: 'app-customer-rewards',
  templateUrl: './customer-rewards.component.html',
  styleUrls: ['./customer-rewards.component.css']
})
export class CustomerRewardsComponent implements OnInit {
  customerId: number=0; // Set this to the customer's ID
  rewardsData: any; // Store customer rewards data

  constructor(private rewardsService: RewardsService) {}

  ngOnInit(): void {
    this.fetchCustomerRewards();
  }

  fetchCustomerRewards() {
  console.log('Fetching rewards for customer ID:', this.customerId);
    this.rewardsService.getRewardsByCustomerId(this.customerId).subscribe(
      (data: any) => {
      console.log('Received rewards data:', data);
        this.rewardsData = data;
      },
      (error: any) => {
        console.error('Error fetching customer rewards', error);
      }
    );
  }
}
