import {Injectable} from "@angular/core"
import {User} from "../interfaces";
import {HttpClient} from "@angular/common/http";

import { tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService{

  private token = 'null'

  constructor(private http: HttpClient) {
  }

  register(user: User) : Observable <User>{
    return this.http.post<User>('/todo/auth/register', user)
  }

  login(user: User): Observable<{token: string}>{
    return this.http.post<{token: string}>('/todo/auth/login', user)
      .pipe(
        tap(
          ({token})=>{
            localStorage.setItem('auth-token', token)
            this.setToken(token)
          }
        )
      )
  }

  setToken(token: string){
    this.token = token
  }
  getToken():string {
    return this.token
  }

  isAuthenticated(): boolean{
    return !!this.token
  }

  loguot(){
    this.setToken('null')
    localStorage.clear()
  }

}
