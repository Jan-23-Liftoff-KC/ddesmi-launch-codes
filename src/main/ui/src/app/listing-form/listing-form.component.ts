import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NgForm } from '@angular/forms';
import { ListingService } from '../listing/listing.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Listing } from '../listing/listing';
import { ActivatedRoute, Router } from '@angular/router';

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

  public listing: Listing | undefined ;

  constructor(private listingService: ListingService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.router = router;
    this.activatedRoute = activatedRoute

  }
  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  
    this.activatedRoute.paramMap
    .subscribe(params => {
      let id = +params.get('id')!;
      this.listingService.getListing(id).subscribe(
        (response: Listing) => {
          this.listing = response;
        }
    )
  })
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

  public onEditListing(editListingForm: NgForm): void {
    this.listingService.updateListing(editListingForm.value, this.listing?.id).subscribe(
      (response: Listing) => {
        console.log(response);
        if(response.address != undefined){
          this.router.navigate(['listings'])
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  };

  public onDeleteListing(id: Number| undefined): void {
    this.listingService.deleteListing(id).subscribe(
      (response: void) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    this.router.navigate(['listings'])

  };
  
}
