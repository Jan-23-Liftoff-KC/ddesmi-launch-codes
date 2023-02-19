import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NgForm } from '@angular/forms';
import { ListingService } from '../listing/listing.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Listing } from '../listing/listing';

@Component({
  selector: 'app-listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.css']
})
export class ListingFormComponent implements OnInit {

  centralHeating: boolean = false;
  centralCooling: boolean = false;
  garage: boolean = false;
  listingDate = new Date();


  public listing: Listing | undefined;
  constructor(private listingService: ListingService) { }

  ngOnInit(): void {
    
  }

  public onAddListing(listingForm: NgForm): void {
    this.listingService.addListing(listingForm.value).subscribe(
      (response: Listing) => {
        console.log(response);
        // this.getListings();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  };
}
