import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user$ = this.authenticationService.user$;

  constructor(private authenticationService:AuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authenticationService.logout().subscribe(()=>{
      this.router.navigate(["/authentication"])
    })
  }
}
