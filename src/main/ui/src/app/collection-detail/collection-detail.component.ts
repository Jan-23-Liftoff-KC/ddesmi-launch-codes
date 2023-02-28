import { Component, OnInit } from '@angular/core';
import { Collection } from '../collection/collection';
import { CollectionService } from '../collection/collection.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css']
})
export class CollectionDetailComponent implements OnInit {
  public collection!: Collection;
  collectionService:CollectionService;

  constructor(private activatedRoute: ActivatedRoute,collectionService: CollectionService, ) {
    this.activatedRoute = activatedRoute;
    this.collectionService = collectionService;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
    .subscribe(params => {
      let id = +params.get('id')!;
      this.collectionService.getCollection(id).subscribe(
        (response: Collection) => {
          this.collection = response;
        }
    )
  })
  }

}
