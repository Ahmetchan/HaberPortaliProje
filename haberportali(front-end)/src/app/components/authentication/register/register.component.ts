import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  //autocomplete="off" formControlName="password"
  registerForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private authenticationService:AuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  register(){
    if (this.registerForm.valid) {
      const registerFormValue = Object.assign({},this.registerForm.value);      
      this.authenticationService.register(registerFormValue).subscribe( () =>{
        this.router.navigate(["/panel"]);        
      })
      
    } else {
      alert("lütfen bilgileri tam girinizi")
    }
  }

}
