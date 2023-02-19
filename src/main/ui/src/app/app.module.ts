import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { ListingFormComponent } from './listing-form/listing-form.component';
import { SingleListingComponent } from './single-listing/single-listing.component';

const routes: Routes = [
  {path:"properties", component: ListingDetailsComponent, children:[
    {path:':id', component: SingleListingComponent},
    {path:"edit/:id", component: ListingFormComponent}
  ]}
]
@NgModule({
  declarations: [
    AppComponent,
    ListingDetailsComponent,
    ListingFormComponent,
    SingleListingComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
