import { Component, Input, OnInit, OnChanges }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { QuestionBase }              from './question-base';
import { QuestionControlService }    from './question-control.service';
@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() questions: QuestionBase<any>[];
  form: FormGroup;
  payLoad = '';
  constructor(private qcs: QuestionControlService) { 
    
  }
  ngOnInit() {
    console.log("question are == " + this.questions);
    this.form = this.qcs.toFormGroup(this.questions);
  }

  ngOnChanges(changes:any){
    console.log("children questions = " + this.questions);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
