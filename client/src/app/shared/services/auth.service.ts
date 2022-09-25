import {Injectable} from "@angular/core"
import {User} from "../interfaces";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class AuthService{

  constructor(private http: HttpClient) {
  }

  registr(){

  }

  login(user: User){

  }

}
