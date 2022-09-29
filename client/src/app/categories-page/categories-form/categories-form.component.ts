import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoriesService} from "../../shared/services/categories.service";
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Category} from "../../shared/interfaces";
import {error} from "@angular/compiler-cli/src/transformers/util";

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
  imagePreviewEdit: string | undefined = ''
  // @ts-ignore
  category: Category

  constructor(private route: ActivatedRoute,
              private categoriesService: CategoriesService) {
  }

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
            if (params['id']) {
              this.isNew = false
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
          }
        }

        // error => (error.error.message  )
      )


  }

  triggerClick() {
    this.inputRef.nativeElement.click()
  }

  onFileUpload(event: any) {
    const file = event.target.files[0]
    this.image = file

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
      },
      error => {
        console.log(error)
      }
    )
  }

}
