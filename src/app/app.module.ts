import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './customer/login/login.component';
import { CancelComponent } from './cancel/cancel.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    CuisineComponent,
    ReservationComponent,
    ContactComponent,
    BlogComponent,
    LoginComponent,
    CancelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
