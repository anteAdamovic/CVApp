import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { BlogComponent } from '../blog/blog.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'home', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: AboutComponent },
  { path: 'blog', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
})
export class RoutingModule { }
