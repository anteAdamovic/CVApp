import { Component } from '@angular/core';

import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
    // Hide loader after page loads
    // document.getElementsByClassName('loader')[0].style.display = 'none';
  }

}
