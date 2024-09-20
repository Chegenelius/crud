import {Component, Injectable, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup, ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {UserService} from "./services/user.service";
import {EditComponent} from "./edit/edit.component";
import {RouterModule} from "@angular/router";
import {AppModule} from "./app.module";


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    NgForOf,
    ReactiveFormsModule,
    RouterModule,
    AppModule
  ]
})
export class AppComponent implements OnInit {
  title = 'my_first_app';
  regForm!: FormGroup;  //declare the property
  postBody: any ={};
  getValue: any ={};
  constructor(private formBuilder: FormBuilder,
              private _service:UserService) {}

  ngOnInit() {
    this.buildForm();
    this.getUserList();

  }
get c (){ return this.regForm.controls; }
  buildForm() {
    this.regForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(5)]],
    })
  }

  addUser(){
    this.postBody={
      username: this.regForm.value.username,
      email: this.regForm.value.email,
      password: this.regForm.value.password,
    }
    this._service.addUser(this.regForm.value).subscribe({
      next: val => {
        alert("User Added");
        this.getUserList();
      },
      error: console.log,
    })

}
  getUserList(){
    this._service.getUserList()
      .subscribe((val)=>{
        this.getValue = val;
      });
  }

 deleteUserMethod(id: number){
    this._service.deleteUserMethod(id).subscribe({
      next: (res) => {
        alert('User deleted');
        this.getUserList();
      },
      error: console.log,
    })

 }
 editUser(){}

  protected readonly EditComponent = EditComponent;
}
