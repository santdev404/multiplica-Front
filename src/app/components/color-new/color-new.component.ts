import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user.service';
import { Color } from '../../models/color';
import { ColorService} from '../../services/color.service';
import { global} from '../../services/global';

@Component({
  selector: 'app-color-new',
  templateUrl: './color-new.component.html',
  styleUrls: ['./color-new.component.css'],
  providers: [UserService,ColorService]
})
export class ColorNewComponent implements OnInit {

  public page_title: any;
  public identity: any;
  public token: any;
  public newColor: Color;

  public status: any;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _colorService: ColorService) { 

      this.page_title = "Color new";
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken(); 

      this.newColor = new Color(1,'','','','');
    }

  ngOnInit(): void {
    if(this.identity.email == undefined){
      this._router.navigate(['login']);
    }
  }

  onSubmit(form:any){
    console.log(this.newColor);
    this._colorService.create(this.token, this.newColor).subscribe(
      response => {
        if(response.status == 'success'){
          this.newColor = response.color;
          this.status = 'success';
          this._router.navigate(['/inicio']);
        }else{
          this.status = 'error';
        }
      }, error =>{
        console.log(error);
        this.status = 'error';
      }
    );
    
  }

}
