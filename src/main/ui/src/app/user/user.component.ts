import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  ngOnInit(): void {
  }
  public onUserRegister(listingForm: NgForm): void {
    this.userService.addUser(listingForm.value).subscribe(
      (response: User) => {
        console.log(response);
        // this.getListings();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  };


}
