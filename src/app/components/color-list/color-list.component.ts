import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user.service';
import { Color } from '../../models/color';
import { ColorService} from '../../services/color.service';
import { global} from '../../services/global';


@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css'],
  providers: [UserService,ColorService]
})
export class ColorListComponent implements OnInit {

  public page_title: string;
  public identity: any;
  public token: any;
  public colors: any;
  public role: any;

  public status: any;

  page = 1;
  count = 0;
  tableSize = 6;




  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _colorService: ColorService
  ) { 
    this.page_title = "Colores";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

  }



  ngOnInit(): void {
    if(this.identity.email != undefined){
      this.getColors();
    }else{
      this._router.navigate(['login']);
    }

    
  }


  onTableDataChange(event:any){
    this.page = event;
    this.getColors();
  }  


  ngDoCheck(){
    this.role = this._userService.getRole();
  }



  getColors(){
    this._colorService.getColors(this.token).subscribe(
      response => {
        if(response.status == 'success'){
          this.colors = response.colors;
          this.status = response.status;
        }
      }, error => {
        console.log(error);
      }
    );
  }

  deleteColor(id:any){
    this._colorService.delete(this.token, id).subscribe(
      response => {
        this.getColors();
      }, error =>{
        console.log(error);
      }
    );
  }

}
