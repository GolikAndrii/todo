import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {

  links = [
    {url: '/overview', name: 'Overview'},
    { url: '/categories', name: 'Categories'},
    {url: '/all-todo', name: 'All todo'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
