import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { HttpService } from '../http.service';

@Component({
  selector: 'cv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navigationLinks: any = [];
  selectedLink: string = '';

  constructor(private http: HttpService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.http.getNavigationLinks()
                .subscribe(
                  navigationLinks => {
                    this.navigationLinks = navigationLinks;
                  }
                );

    switch(this.location.path()) {
      case '': {
        this.selectedLink = 'Home';
        break;
      }
      case '/home': {
        this.selectedLink = 'Home';
        break;
      }
      case '/about': {
        this.selectedLink = 'About';
        break;
      }
      case '/experience': {
        this.selectedLink = 'Experience';
        break;
      }
      case '/blog': {
        this.selectedLink = 'Blog';
        break;
      }
      default: {
        this.selectedLink = '';
        break;
      }
    }
  }

  setHeader(linkName: any) {
    this.selectedLink = linkName;

  }

}
