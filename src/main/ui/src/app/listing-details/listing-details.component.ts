import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Listing } from '../listing/listing';
import { ListingService } from '../listing/listing.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent implements OnInit {
  public listings: Listing[] | undefined;
  
  constructor(private listingService: ListingService) { }

  ngOnInit() {
    this.getListings();
  }

  public getListings(): void {
    this.listingService.getListings().subscribe(
      (response: Listing[]) => {
        this.listings = response;
      },
      (error: HttpErrorResponse) => {
        alert("Could not fetch listings");
      }
    )
  }
  

}
