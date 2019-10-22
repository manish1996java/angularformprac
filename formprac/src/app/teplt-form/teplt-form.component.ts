import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-teplt-form',
  templateUrl: './teplt-form.component.html',
  styleUrls: ['./teplt-form.component.css']
})
export class TepltFormComponent implements OnInit {
  
  sometext:string= 'hey how are you';



  @ViewChild('f') form:NgForm;
  gender = [
    "Male",
    "Female"
  ]

  constructor() { }

  ngOnInit() {
    console.log(this.form);
  }


  suggestUsername(){
    const name:string = "superman"; 
    this.form.form.patchValue({
        formgroup:{
          username: name
        }
    })
  }

  submitted:boolean = false;
  user = {
    username: "",
    email: "",
    password:"",
  }
  onSubmit(){
    this.user.username = this.form.value.formgroup.username;
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.formgroup.password;
    this.submitted = true;
    this.form.resetForm();
  }
}
