import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'


import { AppComponent } from './app.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ListingFormComponent } from './listing-form/listing-form.component';
import { SingleListingComponent } from './single-listing/single-listing.component';
import { AgmCoreModule } from '@agm/core';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';



const routes: Routes = [
  {path:"listings", component: ListingDetailsComponent, children:[
    {path:"add", component: ListingFormComponent},
    {path:':id', component: SingleListingComponent},
    {path:"edit/:id", component: ListingFormComponent}
  ]}, 
  
  { path: 'app', component: AppComponent},
  { path: 'home', component: HomeComponent },

  {path:"user", children:[
    {path:"register", component:UserRegisterComponent},
    {path:"login", component:UserLoginComponent}
  ]}

]
@NgModule({
  declarations: [
    AppComponent,
    ListingDetailsComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ListingFormComponent,
    SingleListingComponent,
    UserRegisterComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes), AgmCoreModule.forRoot({ apiKey: 'AIzaSyChmikksbY3oDGrrC64PlzVYwXU56ie-YY' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
