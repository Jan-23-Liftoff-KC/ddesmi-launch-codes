import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Collection } from './collection';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private javaServerUrl = environment.devServerUrl;
  
  constructor(private http: HttpClient) { }

  public getCollections(): Observable<Collection[]> {
    return this.http.get<Collection[]>(`${this.javaServerUrl}/collection`);
  }

  public getCollection(id: Number): Observable<Collection> {
    return this.http.get<Collection>(`${this.javaServerUrl}/collection/${id}`);
  }

  public addCollection(collection:Collection): Observable<Collection> {
    return this.http.post<Collection>(`${this.javaServerUrl}/collection/add`, collection);
  }
  
  public updateCollection(collection: String): Observable<Collection> {
    return this.http.post<Collection>(`${this.javaServerUrl}/collection/update`, collection);
  }
}