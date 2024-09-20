import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  deleteUserMethod(id: number) {
    return this.http.delete(`http://[::1]:3000/employees/${id}`);
  }
  getUserList() {
    return this.http.get('http://[::1]:3000/employees/');
  }

  addUser(id: number) {
    return this.http.post('http://[::1]:3000/employees/', id);
  }

  editUser(id: number) {
    return this.http.put(`http://[::1]:3000/employees/${id}`, id);
  }

}
