import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection/collection.service';
import { Collection } from '../collection/collection';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.css']
})
export class CollectionPageComponent implements OnInit {
  public collections: Collection[] = [];

  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.getCollections();
  }

  public getCollections(): void {
    this.collectionService.getCollections().subscribe(
      (response: Collection[]) => {
        this.collections = response;
        console.log(this.collections);
      },
      (error: HttpErrorResponse) => {
        alert("Could not fetch collections");
      }
    )
  }

}
