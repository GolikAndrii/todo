import {Injectable} from "@angular/core"
import {User} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})

export class AuthService{

  constructor(private http: HttpClient) {
  }

  registr(){

  }

  login(user: User): Observable<{ token: string }>{
    return this.http.post<{token:string}>('./todo/auth.login', user)
  }

}
