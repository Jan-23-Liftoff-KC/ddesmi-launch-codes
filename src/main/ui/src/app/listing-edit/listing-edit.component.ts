import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../listing/listing';
import { ListingService } from '../listing/listing.service';


@Component({
  selector: 'app-listing-edit',
  templateUrl: './listing-edit.component.html',
  styleUrls: ['./listing-edit.component.css']
})
export class ListingEditComponent implements OnInit {

  public property: Listing[] | undefined;

  constructor(private listingService: ListingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  
  }

  public getListingById(): void {
    //added a 1 as an argument to test
    this.listingService.updateListing.subscribe(
      (response: Listing[]) => {
        this.property = response;
      },
      (error: HttpErrorResponse) => {
        alert("Could not fetch listing");
      }
    )
  }

}
