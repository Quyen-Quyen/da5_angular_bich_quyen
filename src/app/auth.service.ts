import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { AdminService } from './service/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private  _islog = new BehaviorSubject<boolean>(false);
  public readonly TOKEN_NAME = 'profanis_auth';
islog = this._islog.asObservable();
get token(){
  return localStorage.getItem(this.TOKEN_NAME)!;
}
constructor(private http: HttpClient,private apiService: AdminService) { 
  this._islog.next(!!this.token);
}
login(data:any){
  return this.apiService.login(data).pipe(


    tap((respose:any)=>{
       console.log('vao');
      this._islog.next(true);
      localStorage.setItem(this.TOKEN_NAME, respose.access_token);

      console.log(respose.access_token);
      console.log(this.TOKEN_NAME,respose.access_token);
    })
  )
}
}
