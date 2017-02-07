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

export class CaseManagement implements OnInit{
    questions: QuestionBase<any>[] = [];
    constructor(private questionService: QuestionService) {
        
    }

    ngOnInit(){
        this.questionService.getQuestions().subscribe(responseQuestions => {
            var sortedQuestions = this.getSortedQuestions(responseQuestions);
            this.fillQuestionFormControls(sortedQuestions);
        });
    }

    getSortedQuestions(responseQuestions: Question[]): Question[]{
        return _.sortBy(responseQuestions, ['lineNumber', 'order']);
    }

    fillQuestionFormControls(responseQuestions: Question[]){
        responseQuestions.forEach(q => {
            switch (q.questionType) {
                case "dropdown":{
                        this.questions.push(new DropdownQuestion({
                        key: q.key,
                        label: q.label,
                        options: q.options,
                        order: q.order
                        }));
                    break;
                }
                case "textbox": {
                        this.questions.push(new TextboxQuestion({
                        key: q.key,
                        label: q.label,
                        value: q.value,
                        required: q.required,
                        order: q.order
                        }));
                    break;
                }
                default:
                    break;
            }
        });
    }
}

