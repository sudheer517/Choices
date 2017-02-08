import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { QuestionService }    from './components/question.service';
import { Question, IOptions } from './components/question';
import { QuestionBase } from './components/question-base';
import { DropdownQuestion } from './components/question-dropdown';
import { TextboxQuestion } from './components/question-textbox';

@Component({
  selector: 'case-management',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./caseManagement.scss')],
  template: require('./caseManagement.html')
})

export class CaseManagement{
    constructor() {
        
    }
}

