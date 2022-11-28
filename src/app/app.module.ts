import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { FoodViewAllComponent } from './food-view-all/food-view-all.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

const myRoutes: Routes=[
  {
    path:"",component:AdminLoginComponent
  },
  {
    path:"userlogin",component:UserLoginComponent
  },
  {
    path:"registration",component:UserRegistrationComponent
  },
  {
    path:"add",component:AddFoodComponent
  },
  {
    path:"viewall",component:FoodViewAllComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    AddFoodComponent,
    FoodViewAllComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
