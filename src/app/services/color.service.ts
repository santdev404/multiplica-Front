import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Color} from '../models/color';
import {global} from '../services/global';

@Injectable()
export class ColorService{

    public url: string;
    public indentity:any;
    public token:any;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }
    

    getColors(token:any):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization',token);
        return this._http.get(this.url+'color',{headers: headers});
    }





}