import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Collection } from '../collection/collection';
import { HttpErrorResponse } from '@angular/common/http';
import { CollectionService } from '../collection/collection.service';
import { Listing } from '../listing/listing';
import { ListingService } from '../listing/listing.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.css']
})
export class CollectionFormComponent implements OnInit {
  public formCollection!: Collection;
  public editCollection!:Collection;
  public date:Date = new Date();
  public formDate = this.date.toISOString();

  constructor(private collectionService: CollectionService, private activatedRoute: ActivatedRoute, private router :Router) { }

  ngOnInit(): void {
    // console.log(this.formDate);
    this.getCollectionForForm()
  }

  public getCollectionForForm():void{
    this.activatedRoute.paramMap
    .subscribe(params => {
      let id = +params.get('id')!;
      if(id < 1){
        this.editCollection = {id:-1, name:"",note:"",listings:[], lastUpdate:this.date}
      } else {
        this.collectionService.getCollection(id).subscribe(
        (response: Collection) => {
          this.formCollection = response;
          this.editCollection = this.formCollection;
        }
    )
  }
  })
  }

  public onAddCollection(ngFormCollection: NgForm): void {
    ngFormCollection.controls['id'].setValue(null);
    ngFormCollection.controls['listings'].setValue([]);
    console.log(ngFormCollection.value)
    this.collectionService.addCollection(ngFormCollection.value).subscribe(
      (response: Collection) => {
        console.log(response);
        this.btnEditCollection(response.id);
        // this.getListings();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  };

  public onEditCollection(ngFormCollection: NgForm): void {
    if(this.editCollection.listings==undefined){
      ngFormCollection.controls['listings'].setValue([]);
    }else{
      ngFormCollection.controls['listings'].setValue(this.editCollection.listings);
    }
    this.collectionService.updateCollection(ngFormCollection.value).subscribe(
      (response: Collection) => {
        console.log("Response");
        console.log(response);
        this.btnEditCollection(this.formCollection.id);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  };

  public btnEditCollection(route:any):void{
    if(route==null){
      this.router.navigate(['/collection']);
    }
    this.router.navigate([route],
      {relativeTo: this.activatedRoute.parent})
  }
}
