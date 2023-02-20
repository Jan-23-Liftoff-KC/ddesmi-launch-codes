import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from './listing';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private javaServerUrl = environment.devServerUrl;

  constructor( private http: HttpClient) { }

  public getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${this.javaServerUrl}/properties/all`);
  }

  public getListing(id: Number): Observable<Listing> {
    return this.http.get<Listing>(`${this.javaServerUrl}/properties/${id}`);
  }
  
  public addListing(listing:Listing): Observable<Listing> {
    return this.http.post<Listing>(`${this.javaServerUrl}/properties/add`, listing);
  }

  public editListing(listing: Listing, id: number): Observable<Listing> {
    return this.http.put<Listing>(`${this.javaServerUrl}/properties/update/${id}`, listing);
  }

  public deleteListing(listingId: number): Observable<void> {
    return this.http.delete<void>(`${this.javaServerUrl}/properties/delete/${listingId}`);
  }
}
