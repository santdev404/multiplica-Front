import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public page_title: string;
  public user: User;

  public status:any;
  public isToken:any;

  public token:any;
  public identity:any;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.page_title = "Inicia sesion";
    this.user = new User(1,'','');
  }

  ngOnInit(): void {
  }

  onSubmit(form:any){

    this.isToken = true; 

    this._userService.signUp(this.user).subscribe(
      response => {
        
        if(response.status != 'error'){
          this.status = 'success';
          this.token = response;

          
          this._userService.signUp(this.user, this.isToken).subscribe(
            response => {
              
               this.identity = response;
               console.log(this.token);
               console.log(this.identity);

              
               localStorage.setItem('token', this.token);
               localStorage.setItem('identity', JSON.stringify(this.identity)); 


              
              this._router.navigate(['inicio']);

 
            },
            error => {
              this.status = "error";
              console.log(<any>error);
            }
          );



        }else{
          this.status = 'error';
          
        }
      },
      error => {
        this.status = "error";
        console.log(<any>error);
      }
    );
  }




}
