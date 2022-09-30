import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {

  links = [
    {url: '/overview', name: 'Overview'},
    { url: '/categories', name: 'Categories'},
    {url: '/all-todo', name: '#Todo'}
  ]

  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit(): void {
  }

  logout(event: Event){
    event.preventDefault()
    this.auth.loguot()
    this.router.navigate(['/login'])
  }

}
