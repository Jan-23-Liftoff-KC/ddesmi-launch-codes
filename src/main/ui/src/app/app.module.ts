import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { ListingFormComponent } from './listing-form/listing-form.component';
import { ListingEditComponent } from './listing-edit/listing-edit.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ListingDetailsComponent,
    ListingFormComponent,
    ListingEditComponent
  ],
  imports: [
    RouterModule, BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
