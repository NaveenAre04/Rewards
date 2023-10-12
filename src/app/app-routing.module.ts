import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerRewardsComponent } from './customer-rewards/customer-rewards.component';  // Adjust the path as needed


//const routes: Routes = [];

const routes: Routes = [
  // ...other routes
  { path: 'customer-rewards', component: CustomerRewardsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// const routes: Routes = [
//   // ...other routes
//   { path: 'customer-rewards', component: CustomerRewardsComponent },
// ];

export class AppRoutingModule { }
