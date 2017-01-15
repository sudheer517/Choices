import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'case-management',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./caseManagement.scss')],
  template: require('./caseManagement.html')
})
export class CaseManagement {

  constructor() {
  }

}
