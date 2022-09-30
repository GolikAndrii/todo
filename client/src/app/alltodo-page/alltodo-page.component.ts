import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Category} from "../shared/interfaces";

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
  // date = new Date()
  date = new Date

  ngOnInit(): void {

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

    } else {
      //update

    }

  }

}
