import { Component, OnInit } from '@angular/core';
import { Collection } from '../collection/collection';
import { CollectionService } from '../collection/collection.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css']
})
export class CollectionDetailComponent implements OnInit {
  public collection: Collection = {id:-1, name:"",note:"",listings:[], lastUpdate: new Date()};
  collectionService:CollectionService;

  constructor(private activatedRoute: ActivatedRoute, private router :Router,collectionService: CollectionService, ) {
    this.activatedRoute = activatedRoute;
    this.collectionService = collectionService;
    this.router = router;
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

  public onDeleteCollection(id: Number): void {
    this.collectionService.deleteCollection(id).subscribe(
      (response: void) => {
        console.log(response);
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
this.router.navigate(['collection']);
  };

  public btnEditCollection():void{
    this.router.navigate(['edit', this.collection.id],
      {relativeTo: this.activatedRoute.parent})
  }
}