import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Listing } from './listing/listing';
import { ListingService } from './listing/listing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ui';
  public listings: Listing[] | undefined;
  
  constructor(private listingService: ListingService) { }
}
