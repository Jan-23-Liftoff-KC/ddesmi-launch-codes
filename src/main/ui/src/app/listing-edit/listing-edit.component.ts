import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing/listing';
import { ListingService } from '../listing/listing.service';


@Component({
  selector: 'app-listing-edit',
  templateUrl: './listing-edit.component.html',
  styleUrls: ['./listing-edit.component.css']
})
export class ListingEditComponent implements OnInit {

  public property: Listing[] | undefined;

  constructor(private listingService: ListingService) { }

  ngOnInit(): void {
  }

  public getListingById(): void {
    this.listingService.getListingById().subscribe(
      (response: Listing[]) => {
        this.property = response;
      }
    )
  }

}
