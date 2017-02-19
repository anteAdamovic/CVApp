import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  topSkills: any = []; // Array of top skills
  selectedSkill: any = {}; // Currently selected skill
  slideAnimation = false; // Used for sliding animation on skill bars
  sendingEmail = false; // Used for states of Send button { disabled, text }

  // Ignore this
  constructor(private http: HttpService) { 
    let a = {
      a: 1,
      b: 2
    }
    console.log(a);
    a['c'] = 1;
    console.log(a);
  }

  slide() {
    this.slideAnimation = !this.slideAnimation;
  }

  notActiveYet() {
    alert("This feture isn't working yet, contact me on one of the social networks instead or on email ante.adamovic93@gmail.com.");
  }

  ngOnInit() {
    // Subscribe to http service and fetch top skills from topSkills.json
    this.http.getTopSkills()
                .subscribe(
                  topSkills => {
                    this.topSkills = topSkills;
                    this.setActives();
                    console.log(this.topSkills);
                  }
                );
  }

  // Set new selected skill
  selectSkill(skill) {
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
    this.selectSkill(this.topSkills[0]);
  }

  sendMail() {
    let form = document.getElementById('contactForm');
    let email = form.getElementsByTagName('input')[0].value;
    let title = form.getElementsByTagName('input')[1].value;
    let message = form.getElementsByTagName('textarea')[0].value;
    
    this.sendingEmail = true;
    this.http.sendMail(email, title, message).subscribe(
      response => {
        console.log(response);
        alert('Your message has been sent.');
      },
      error => {
        console.log(error);        
        document.getElementById('contactForm').getElementsByTagName('input')[0].value = '';
        document.getElementById('contactForm').getElementsByTagName('input')[1].value = '';
        document.getElementById('contactForm').getElementsByTagName('textarea')[0].value = '';

        alert('There was an error sending your message.');
        this.sendingEmail = false;
      },
      () => {
        document.getElementById('contactForm').getElementsByTagName('input')[0].value = '';
        document.getElementById('contactForm').getElementsByTagName('input')[1].value = '';
        document.getElementById('contactForm').getElementsByTagName('textarea')[0].value = '';
        this.sendingEmail = false;
      }
    );
  }

}
