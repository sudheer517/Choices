import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  private _todoList = [
    { text: 'Quantium DNA roll out' },
    { text: 'Finish web pack set up' },
    { text: 'Kannan should be updated about the status' },
    { text: 'Need Reddy\'s help with DocumentDB' },
    { text: 'What do you think?' },
  ];

  getTodoList() {
    return this._todoList;
  }
}
