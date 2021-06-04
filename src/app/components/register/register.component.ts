import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public page_title: string;
  public user: User;

  public status:any;

  constructor(
    private _userService: UserService
  ) { 
    this.page_title = "Registrarme";
    this.user = new User(1,'','');
  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    

    this._userService.register(this.user).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = response.status;
          form.reset();
        }else{
          this.status = 'error';
        }
        
      }, error=>{
        console.log(<any>error);
        this.status = 'error';
      }
    );

  }

}
