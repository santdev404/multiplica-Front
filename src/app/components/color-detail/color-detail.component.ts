import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user.service';
import { Color } from '../../models/color';
import { ColorService} from '../../services/color.service';
import { global} from '../../services/global';

@Component({
  selector: 'app-color-detail',
  templateUrl: './color-detail.component.html',
  styleUrls: ['./color-detail.component.css'],
  providers: [UserService,ColorService]
})
export class ColorDetailComponent implements OnInit {

  public page_title: any;
  public identity: any;
  public token: any;
  public color: any;

  public status: any;

  constructor(    
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _colorService: ColorService) {  
    
    
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken(); 

  }

  ngOnInit(): void {

    if(this.identity.email != undefined){
      this.getColor();
    }else{
      this._router.navigate(['login']);
    }
  }

  getColor(){

    this._route.params.subscribe(params=>{
      let id = +params['id'];

      this._colorService.getColor(this.token,id).subscribe(
        response => {
          if(response.status == 'success'){
            this.color = response.color;
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
