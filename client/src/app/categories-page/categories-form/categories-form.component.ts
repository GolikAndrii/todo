import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoriesService} from "../../shared/services/categories.service";
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {

  form: FormGroup | undefined
  isNew = true

  constructor( private route: ActivatedRoute,
               private categoriesService: CategoriesService) { }

  ngOnInit(): void {
      this.form = new FormGroup({
        name: new FormControl(null, Validators.required)
      })

    //   this.route.params.subscribe((params:Params) =>{
    //   if(params['id']){
    //     this.isNew = false
    //   }
    // })

    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if(params['id']){
              this.isNew = false
              return this.categoriesService.getById(params['id'])
            }
            return of (null)
          }
        )
      )
      .subscribe(
        category => {
          if(category){
            this.form?.patchValue({
              name: category.name
            })
          }
        },
        // error => MaterialService.toast(error.error.message  )
      )

  }
  onSubmit(){

  }

}
