import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  user$ = this.authenticationService.user$;

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

}
