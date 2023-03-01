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
    this.activatedRoute.paramMap
    .subscribe(params => {
      let id = +params.get('id')!;
      this.collectionService.getCollection(id).subscribe(
        (response: Collection) => {
          this.formCollection = response;
          this.editCollection = this.formCollection;
        }
    )
  })
  }

  public onEditCollection(ngFormCollection: NgForm): void {
    ngFormCollection.controls['listings'].setValue(this.editCollection.listings);
    this.collectionService.updateCollection(ngFormCollection.value).subscribe(
      (response: Collection) => {
        console.log("Response");
        console.log(response);
        this.btnEditCollection();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  };

  public btnEditCollection():void{
    this.router.navigate([this.formCollection.id],
      {relativeTo: this.activatedRoute.parent})
  }

  public handleEditSubmit(){
        this.editCollection = this.formCollection;
  };

}
