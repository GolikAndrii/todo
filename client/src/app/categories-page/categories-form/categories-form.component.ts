import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoriesService} from "../../shared/services/categories.service";
import {switchMap} from 'rxjs/operators';
import {combineLatest, of} from 'rxjs';
import {Category} from "../../shared/interfaces";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {describeResolvedType} from "@angular/compiler-cli/src/ngtsc/partial_evaluator";
import {response} from "express";
import {MaterialService} from 'src/app/shared/classes/material.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {
// @ts-ignore
  @ViewChild('input') inputRef: ElementRef

  // @ts-ignore
  form: FormGroup
  isNew = true
  // @ts-ignore
  image: File
  // @ts-ignore
  imagePreview: string | ArrayBuffer | null = ''

  // @ts-ignore
  category: Category
  imagePreviewEdit: string | undefined = ''


  constructor(private route: ActivatedRoute,
              private categoriesService: CategoriesService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required)
    })

    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.isNew = false
      }
    })

    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              this.isNew = false
              this.imagePreview = ''
              return this.categoriesService.getById(params['id'])
            }
            return of(null)
          }
        )
      )
      .subscribe(
        category => {
          if (category) {
            this.category = category
            this.form?.patchValue({
              name: category.name
            })
            this.imagePreviewEdit = category.imageSrc

            MaterialService.updateTextInput()
          }
          console.log(this.imagePreviewEdit)
        }

        // error => (error.error.message  )
      )


  }

  deleteCategory() {
    const decision = window.confirm(`Do you want to delete ${this.category.name}?`)
    if (decision) {
      this.categoriesService.delete(this.category._id)
        .subscribe(
          response => response.message,
          () => {},
          () => this.router.navigate(['/categories'])
        )
    }
  }

  triggerClick() {
    this.inputRef.nativeElement.click()
  }

  onFileUpload(event: any) {
    const file = event.target.files[0]
    this.image = file
    this.imagePreview = ''

    const reader = new FileReader()
    reader.onload = () => {
      this.imagePreview = reader.result
    }
    reader.readAsDataURL(file)
  }

  onSubmit() {
    let obs$
    if (this.isNew) {
      // create
      obs$ = this.categoriesService.create(this.form.value.name, this.image)
    } else {
      //update
      obs$ = this.categoriesService.update(this.category._id, this.form.value.name, this.image)
    }
    obs$.subscribe(
      category => {
        this.category = category
        MaterialService.toast('Changes saved')
      },
      error => {
        console.log(error)
      }
    )
  }

}
