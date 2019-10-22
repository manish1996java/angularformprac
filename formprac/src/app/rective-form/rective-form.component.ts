import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, ControlContainer, FormArray } from '@angular/forms';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';

@Component({
  selector: 'app-rective-form',
  templateUrl: './rective-form.component.html',
  styleUrls: ['./rective-form.component.css']
})
export class RectiveFormComponent implements OnInit {

  gender = [
    "Male",
    "Female"
  ] 
  
  signupForm: FormGroup;
  constructor() { }

  ngOnInit() {
        this.signupForm = new FormGroup({
          'userdata': new FormGroup({
            'username': new FormControl(null,[Validators.required,]),
            'password': new FormControl(null,[Validators.required,]),
          }),
          'email': new FormControl(null,[Validators.required,Validators.email]),
          'hobbies': new FormArray([]),
          'image' : new FormControl(null, Validators.required),
        })
  }

  
  addHobies(){
    (<FormArray>this.signupForm.get('hobbies')).push(new FormControl(null,Validators.required))
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  imagepreview:any;
  onImagePicked(event){
      const file = (<HTMLInputElement>event.target).files[0];
      console.log(file);
      this.signupForm.patchValue({
        image:file
      })
      this.signupForm.get('image').updateValueAndValidity();
      console.log(this.signupForm);
      
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = ()=>{
        this.imagepreview = reader.result;
      }
      console.log(reader);
  }

}
