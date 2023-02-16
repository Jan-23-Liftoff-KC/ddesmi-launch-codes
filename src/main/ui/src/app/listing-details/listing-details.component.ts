import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Listing } from '../listing/listing';
import { ListingService } from '../listing/listing.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent implements OnInit {

  public listings: Listing[] | undefined;
  public editListing: Listing | undefined;


  centralHeating: boolean = false;
  centralCooling: boolean = false;
  garage: boolean = false;
  listingDate = new Date();
  
  constructor(private listingService: ListingService) { }

  ngOnInit() {
    this.getListings();
  }

  public getListings(): void{
    this.listingService.getListings().subscribe(
      (response: Listing[]) => {
        this.listings = response;
      },
      (error: HttpErrorResponse) => {
        alert("Could not fetch listings");
      }
    )
  }

  public onAddListing(listingForm: NgForm): void {
    document.getElementById('add-employee-form')?.click();
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

  public onEditListing(listing: Listing): void {
    this.listingService.editListing(listing).subscribe(
      (response: Listing) => {
        console.log(response);
        // this.getListings();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  };
  
  public onOpenModal(listing: Listing | undefined, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal')

    if (mode === 'add'){
      button.setAttribute('data-target', '#addListingModal')
    }
    if (mode === 'edit'){
      this.editListing = listing;
      button.setAttribute('data-target', '#editListingModal')
    }
    if (mode === 'delete'){
      button.setAttribute('data-target', '#deleteListingModal')
    }
    container?.appendChild(button)
    button.click();
  }

  
  

}
