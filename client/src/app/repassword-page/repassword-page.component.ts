import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-repassword-page',
  templateUrl: './repassword-page.component.html',
  styleUrls: ['./repassword-page.component.css']
})
export class RepasswordPageComponent implements OnInit,OnDestroy {
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
      password: new FormControl(null, [Validators.required])
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
      ()=> this.router.navigate(['/login'])
    )
  }

}
