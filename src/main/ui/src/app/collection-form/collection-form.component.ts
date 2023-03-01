import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Collection } from '../collection/collection';
import { HttpErrorResponse } from '@angular/common/http';
import { CollectionService } from '../collection/collection.service';
import { Listing } from '../listing/listing';

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.css']
})
export class CollectionFormComponent implements OnInit {
  @Input() collection!: Collection;
  public editCollection!:Collection;
  public date:Date = new Date();
  public formDate = this.date.toISOString();

  isFormVisible:boolean = false;

  constructor(private collectionService: CollectionService, ) { }

  ngOnInit(): void {
    // console.log(this.formDate);
  }

  public onEditCollection(formCollection: NgForm): void {
    this.isFormVisible = false; 
    formCollection.controls['listings'].setValue(this.editCollection.listings);
    this.collectionService.updateCollection(formCollection.value).subscribe(
      (response: Collection) => {
        console.log("Response");
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  };

  public handleEditSubmit(){
        this.editCollection = this.collection;
  };

}
