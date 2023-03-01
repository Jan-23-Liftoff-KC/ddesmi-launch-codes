import { Component, OnInit } from '@angular/core';
import { SearchModel } from './search';
import { environment } from '../../environments/environment';
import { ListingService } from '../listing/listing.service';
import { Listing } from '../listing/listing';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchObject: SearchModel;
  private listings: Listing[];
  public results: Listing[];
  private javaServerUrl = environment.devServerUrl;

  constructor( private listingService: ListingService) { 
    this.listings = [];
    this.searchObject = {
      minbeds : 0,
      minprice : 0,
      maxbeds : 0,
      maxprice : 0,
      streetaddress : "",
      forsale : ""
    };
  }
  
  ngOnInit(): void {
    this.listingService.getListings().subscribe(
      (response: Listing[]) => {
        this.listings = response;
        console.log(this.listings);
      },
      (error: HttpErrorResponse) => {
        alert("Could not fetch listings");
      }
    )
  }

  search()
  {
    this.results = [];

    console.log(this.searchObject);
    for(var i=0; i<this.listings.length;i++)
    {

      var item = this.listings[i];
      console.log(item);
      if(item.bedrooms >= this.searchObject.minbeds && item.bedrooms <= this.searchObject.maxbeds
        && item.address.includes(this.searchObject.streetaddress)
        && item.price >= this.searchObject.minprice && item.price <= this.searchObject.maxprice)
        {
          this.results.push(item);
    console.log(item);

        }
    }
  }

}
