import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
  private navigationLinksUrl: string = 'app/settings/navigationLinks.json';
  private topSkillsUrl: string = 'app/settings/topSkills.json';
  private sendEmailUrl: string = 'http://ante.co.nf/app/settings/sendMail.php';

  constructor(private http: Http) { }

  getNavigationLinks(): Observable<any> {
    return this.http.get(this.navigationLinksUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getTopSkills(): Observable<any> {
    return this.http.get(this.topSkillsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  sendMail(email, title, message): Observable<any> {
    return this.http.get(this.constructEmailString(email, title, message))
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private constructEmailString(email, title, message): string {
    return this.sendEmailUrl + '?email=' + email + '&title=' + title + '&message=' + message;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    if( error instanceof Response ) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errorMessage = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMessage = error.message ? error.message : error.toString();
    }
    alert('Something went wront.');
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
