import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { QuestionService }    from './components/question.service';
import { Question, IOptions } from './components/question';
import { DropdownQuestion } from './components/question-dropdown';
import { TextboxQuestion } from './components/question-textbox';
@Component({
  selector: 'case-management',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./caseManagement.scss')],
  template: require('./caseManagement.html')
})

export class CaseManagement implements OnInit{
    questions: any[] = [];
    constructor(private questionService: QuestionService) {
        
    }

    ngOnInit(){
        this.questionService.getQuestions().subscribe(responseQuestions => {
            responseQuestions.sort((a,b) => a.order - b.order);
            let tempQuestions = [];
            responseQuestions.forEach(q => {
                if(q.questionType === "dropdown"){
                   tempQuestions.push(new DropdownQuestion({
                        key: q.key,
                        label: q.label,
                        options: q.options,
                        order: q.order
                   }));
                }
                if(q.questionType === "textbox"){
                     tempQuestions.push(new TextboxQuestion({
                        key: q.key,
                        label: q.label,
                        value: q.value,
                        required: q.required,
                        order: q.order
                     }));
                }
            });

            this.questions = tempQuestions;
        },
        error => console.log(error),
        () => console.log(this.questions));
    }
}

