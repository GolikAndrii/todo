import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Category} from "../shared/interfaces";
import {Todo} from "../shared/interfaces";
import {CategoriesService} from "../shared/services/categories.service";
import {TodoService} from "../shared/services/todo.service";
import {MaterialService} from "../shared/classes/material.service";

@Component({
  selector: 'app-alltodo-page',
  templateUrl: './alltodo-page.component.html',
  styleUrls: ['./alltodo-page.component.css']
})

export class AlltodoPageComponent implements OnInit {
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
  // @ts-ignore
  todo: Todo

  date = new Date
  nowDate = Date.now()
  nowTime = Date.now()

  categories: Category[] = []

  constructor(private alltodoService: CategoriesService,
              private todoService: TodoService,
  ) {
  }

  ngOnInit(): void {
    this.alltodoService.fetch().subscribe(categories => {
      this.categories = categories
    })
  }

  dateNow(){
    return this.date.toLocaleDateString()

  }
  timeNow(){
    return this.date.toLocaleTimeString()
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
      obs$ = this.todoService.create(this.form.value.name, this.image)
    } else {
      //update
      obs$ = this.todoService.update(this.category._id, this.form.value.name, this.image)
    }
    obs$.subscribe(
      todo => {
        this.todo = todo
        MaterialService.toast('Changes saved')
      },
      error => {
        console.log(error)
      }
    )
  }

}
