import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserRegister } from '../user/user-register';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private userService: UserService) { }
  ngOnInit(): void {
  }
  public onUserRegister(listingForm: NgForm): void {
    this.userService.addUser(listingForm.value).subscribe(
      (response: UserRegister) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  };


}

