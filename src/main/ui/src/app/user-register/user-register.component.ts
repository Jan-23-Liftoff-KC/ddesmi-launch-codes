import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegister } from '../user/user-register';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  public userReg!: UserRegister;

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute = activatedRoute;
    this.router = router;
  }
  ngOnInit(): void {
  }
  
  public onUserRegister(userReg: NgForm): void {
    this.userService.addUser(userReg.value).subscribe(
      (response: UserRegister) => {
        console.log(response);
        if(response.username != undefined){
          this.router.navigate(['user/login'])
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  };


}

