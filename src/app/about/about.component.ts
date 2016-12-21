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

  notActiveYet() {
    alert("This feture isn't working yet, contact me on one of the social networks instead or on email ante.adamovic93@gmail.com.");
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
    document.getElementById('knowledge').style.width = skill.knowledge + '%';
    document.getElementById('experience').style.width = skill.experience + '%';
    document.getElementById('passion').style.width = skill.passion + '%';
  }

  private setActives() {
    for(let x = 0; x < this.topSkills.length; x++){
      this.topSkills[x]['active'] = false;
    }

    this.topSkills[0]['active'] = true;
    this.changeActiveSkill(this.topSkills[0]);
  }


}
