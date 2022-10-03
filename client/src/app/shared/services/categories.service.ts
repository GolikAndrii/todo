import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Category, Message} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
  }
)

export class CategoriesService {
  constructor(private http: HttpClient) {
  }

  create(name: string, image?: File): Observable<Category> {
    const fd = new FormData()

    if (image) {
      fd.append('image', image, image.name)
    }
    fd.append('name', name)

    return this.http.post<Category>('/todo/category', fd)
  }

  update(id: string | undefined, name: string, image?: File): Observable<Category> {
    const fd = new FormData()

    if (image) {
      fd.append('image', image, image.name)
    }
    fd.append('name', name)
    return this.http.patch<Category>(`/todo/category/${id}`, fd)
  }



  fetch(): Observable<Category[]> {
    return this.http.get<Category[]>('/todo/category')
  }

  getById(id: string): Observable<Category> {
    return this.http.get<Category>(`/todo/category/${id}`)
  }

  delete(id: string | undefined): Observable<Message>{
return this.http.delete<Message>(`/todo/category/${id}`)
  }
}
