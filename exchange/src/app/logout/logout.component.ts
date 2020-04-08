import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authenticate/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private authentication: AuthenticationService) { }

  ngOnInit(): void {
    this.authentication.logout();
  }

}