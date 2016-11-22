import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  topSkills: any = [];
  selectedSkill: any = {};

  constructor(private http: HttpService) { 
    let a = {
      a: 1,
      b: 2
    }
    console.log(a);
    a['c'] = 1;
    console.log(a);
  }

  ngOnInit() {
    this.http.getTopSkills()
                .subscribe(
                  topSkills => {
                    this.topSkills = topSkills;
                    this.setActives();
                    console.log(this.topSkills);
                  }
                );
  }

  changeActiveSkill(skill) {
    this.selectedSkill = skill;
  }

  private setActives() {
    for(let x = 0; x < this.topSkills.length; x++){
      this.topSkills[x]['active'] = false;
    }

    this.topSkills[0]['active'] = true;
    this.selectedSkill = this.topSkills[0];
  }


}
