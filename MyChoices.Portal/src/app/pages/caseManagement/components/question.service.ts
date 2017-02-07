import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Question } from './question';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestionService {
    constructor(private http: Http){
    }
    getQuestions(): Observable<Question[]> {
      return this.http.get("http://localhost:57157/api/values").map((response: Response) => {
          return <Question[]>response.json();
      });
    }
    // getSortedQuestions(): Observable<Question[]>{
    //    return this.getQuestions().map(x => x.sort((a,b) => a.lineNumber - b.lineNumber));
    // }
}
