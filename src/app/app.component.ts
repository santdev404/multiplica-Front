import { Component, OnInit, DoCheck } from '@angular/core';
import {UserService} from './services/user.service';
import {global} from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck{

  public identity: any;
  public token: any;
  public url: any;

  constructor(
    private _userService: UserService,

  ){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = global.url;
  }

  ngOnInit(){
    console.log(this.identity);
    console.log(this.token);
  }

  ngDoCheck(){
    this.loadUser();
  }


  loadUser(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }





}
