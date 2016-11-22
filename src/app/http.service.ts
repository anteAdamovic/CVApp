import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
  private navigationLinksUrl: string = 'app/settings/navigationLinks.json';
  private topSkillsUrl: string = 'app/settings/topSkills.json';

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

    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
