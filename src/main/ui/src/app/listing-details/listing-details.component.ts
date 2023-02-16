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

  public onOpenModal(listing: Listing, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal')

    if (mode === 'add'){
      button.setAttribute('data-target', '#addListingModal')
    }
    if (mode === 'edit'){
      button.setAttribute('data-target', '#editListingModal')
    }
    if (mode === 'delete'){
      button.setAttribute('data-target', '#deleteListingModal')
    }
    container?.appendChild(button)
    button.click();
  }

  
  

}
