import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'cv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navigationLinks: any = [];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getNavigationLinks()
                .subscribe(
                  navigationLinks => {
                    this.navigationLinks = navigationLinks;
                    console.log(navigationLinks);
                  }
                );
  }

}
