import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerRewardsComponent } from './customer-rewards/customer-rewards.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerRewardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
