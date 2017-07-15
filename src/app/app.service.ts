import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class Service{

    private _url: string = "http://agro.sia.co.in/admin/getallemployee";

    constructor(private _http: Http){}
    getEmployees(){
        return this._http.get(this._url)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response){
        console.error("this is the wrror",error);
        return Observable.throw(error || "Server Error");
    }

  
}