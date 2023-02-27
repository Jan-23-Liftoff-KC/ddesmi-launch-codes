import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Listing } from '../listing/listing';
import { ListingService } from '../listing/listing.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-single-listing',
  templateUrl: './single-listing.component.html',
  styleUrls: ['./single-listing.component.css']
})
export class SingleListingComponent implements OnInit {
  public listing!: Listing;
  listingService: ListingService;
  lat: number = 0;
  lng: number = 0;
  address: string = "";
  formattedAddress: string = "";

  constructor(private activatedRoute: ActivatedRoute, private router: Router, listingService: ListingService) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.listingService = listingService;
  }

  ngOnInit() {
    this.activatedRoute.paramMap
    .subscribe(params => {
      let id = +params.get('id')!;
      this.listingService.getListing(id).subscribe(
        (response: Listing) => {
          this.listing = response;
          this.lat = this.listing.latitude;
          this.lng = this.listing.longitude;
        }
    )
  })
};

  public closeEditProperty():void{
    this.router.navigate(['edit', this.listing.id],
      {relativeTo: this.activatedRoute.parent})
  }

}
