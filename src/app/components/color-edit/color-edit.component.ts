import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user.service';
import { Color } from '../../models/color';
import { ColorService} from '../../services/color.service';
import { global} from '../../services/global';

@Component({
  selector: 'app-color-edit',
  templateUrl: '../color-new/color-new.component.html',
  providers: [UserService,ColorService]
})
export class ColorEditComponent implements OnInit {

  public page_title: any;
  public identity: any;
  public token: any;
  public newColor: Color;

  public status: any;
  public is_edit: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _colorService: ColorService
  ) {

    this.page_title = "Color new";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken(); 
    this.newColor = new Color(1,'','','','');
    this.is_edit = true;

   }

  ngOnInit(): void {

    if(this.identity.email != undefined){
      this.getColor();
    }else{
      this._router.navigate(['login']);
    }
  }

  onSubmit(form:any){

    this._colorService.update(this.token, this.newColor, this.newColor.id).subscribe(
      response => {
        if(response.status == 'success'){
 
          this.status = 'success';
          this._router.navigate(['/inicio']);
        }else{
          this.status = 'error';
        }
      }, error =>{

        this.status = 'error';
      }
    );
    
  }

  getColor(){

    this._route.params.subscribe(params=>{
      let id = +params['id'];

      this._colorService.getColor(this.token,id).subscribe(
        response => {
          if(response.status == 'success'){
            this.newColor = response.color;
            this.status = response.status;
            this.page_title = response.color.name;
          }
        }, error => {
          console.log(error);
        }
      );
  
    });

  }

}
