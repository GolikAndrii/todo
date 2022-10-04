import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Todo, Message} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
  }
)

export class CategoriesService {
  constructor(private http: HttpClient) {
  }

  create(name: string, image?: File): Observable<Todo> {
    const fd = new FormData()

    if (image) {
      fd.append('image', image, image.name)
    }
    fd.append('name', name)

    return this.http.post<Todo>('/todo/todos', fd)
  }

  update(id: string | undefined, name: string, image?: File): Observable<Todo> {
    const fd = new FormData()

    if (image) {
      fd.append('image', image, image.name)
    }
    fd.append('name', name)
    return this.http.patch<Todo>(`/todo/todos/${id}`, fd)
  }



  fetch(): Observable<Todo[]> {
    return this.http.get<Todo[]>('/todo/todos')
  }

  getById(id: string): Observable<Todo> {
    return this.http.get<Todo>(`/todo/todos/${id}`)
  }

  delete(id: string | undefined): Observable<Message>{
    return this.http.delete<Message>(`/todo/todos/${id}`)
  }
}
