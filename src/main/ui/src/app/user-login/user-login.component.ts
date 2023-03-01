import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute = activatedRoute;
    this.router = router;
  }
  ngOnInit(): void {
  }

  public onUserLogin(user: NgForm): void {
    this.userService.userLogin(user.value).subscribe(
      (response: User) => {
        console.log(response);
        if(response.id != 0){
          this.router.navigate(['listings'])
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
      
    )
  };

}
