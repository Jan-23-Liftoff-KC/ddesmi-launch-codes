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
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CollectionPageComponent } from './collection-page/collection-page.component';
import { CollectionDetailComponent } from './collection-detail/collection-detail.component';
import { CollectionFormComponent } from './collection-form/collection-form.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path:"listings", component: ListingDetailsComponent, children:[
    {path:"add", component: ListingFormComponent},
    {path:':id', component: SingleListingComponent},
    {path:"edit/:id", component: ListingFormComponent}
  ]}, 

  { path: 'app', component: AppComponent},
  { path: 'home', component: HomeComponent },

  { path: 'collection', component: CollectionPageComponent, children:[
    {path:"add", component: CollectionFormComponent},
    {path:":id", component: CollectionDetailComponent},
    {path:"edit/:id", component: CollectionFormComponent},
  ]},

  {path:"user", children:[
    {path:"register", component:UserRegisterComponent},
    {path:"login", component:UserLoginComponent}
  ]}

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent, 
    ListingDetailsComponent,
    ListingFormComponent,
    SingleListingComponent,
    UserRegisterComponent,
    UserLoginComponent,
    CollectionPageComponent,
    CollectionDetailComponent,
    CollectionFormComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
