import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  // @ts-ignore
  form: FormGroup
  // @ts-ignore
  aSub: Subscription

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })

    this.route.queryParams.subscribe((params:Params)=>{
      if (params['registered']){
// Now you can enter
      } else if(params['accessDenied']){
        //You need Authorisation
      }
    })
  }
  ngOnDestroy() {
    if (this.aSub){

      this.aSub.unsubscribe()
    }
  }

  onSubmit(){
    this.form.disable()
   this.aSub = this.auth.login(this.form.value).subscribe(
      ()=> this.router.navigate(['/overview'])
    )
  }

}
