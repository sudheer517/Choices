import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { Question, IOptions } from './question';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class QuestionService {
    constructor(private http: Http){

    }
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  /*getQuestions() {
    let questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }*/

  getQuestions(): Observable<Question[]> {
     return this.http.get("http://localhost:57157/api/values").map((response: Response) => {
         let finalResponse = <Question[]> response.json();
         return finalResponse;
     });
  }
}
