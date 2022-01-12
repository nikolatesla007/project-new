import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './customer/login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CancelComponent } from './cancel/cancel.component';

const routes: Routes = [
  { path: 'customer',component:CustomerComponent},

  { path: 'restaurant', component:RestaurantComponent},

  {path:'restaurantdetails/:id',component:RestaurantDetailComponent},

  {path:'reservations/:id',component:ReservationComponent},

  {path:'contact',component:ContactComponent},

  {path:'blog',component:BlogComponent},

  {path:'login',component:LoginComponent},

  {path:'cancel',component:CancelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
