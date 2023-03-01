import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from './listing';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private javaServerUrl = environment.devServerUrl;

  constructor( private http: HttpClient) { }

  public getProperty(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${this.javaServerUrl}/properties/all`);
  }

  public getListing(id: Number): Observable<Listing> {
    return this.http.get<Listing>(`${this.javaServerUrl}/properties/${id}`);
  }
  
  public addListing(listing:Listing): Observable<Listing> {
    return this.http.post<Listing>(`${this.javaServerUrl}/properties/add`, listing);
  }

  public updateListing(listing: Listing, id: number | undefined): Observable<Listing> {
    return this.http.put<Listing>(`${this.javaServerUrl}/properties/update/${id}`, listing);
  }

  public deleteListing(id: Number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.javaServerUrl}/properties/delete/${id}`);
  }

}
