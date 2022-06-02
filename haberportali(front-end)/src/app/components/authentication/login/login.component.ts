import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private authenticationService:AuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    if (this.loginForm.valid) {
      const registerFormValue = Object.assign({},this.loginForm.value);
      this.authenticationService.login(registerFormValue).subscribe( () =>{
        this.router.navigate(["/admin"])
      })
      
    } else {
      alert("lütfen bilgileri eksik olmadan giriniz")
    }
  }

}
