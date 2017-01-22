import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'case-management',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./caseManagement.scss')],
  template: require('./caseManagement.html')
})
export class CaseManagement {
    public checkboxModel = [{
        name: 'Husband',
        checked: true,
        class: 'col-md-2'
    }, {
        name: 'Children',
        checked: true,
        class: 'col-md-2'
    }, {
        name: 'Mother in law',
        checked: false,
        class: 'col-md-2'
    }, {
        name: 'Father in law',
        checked: false,
        class: 'col-md-2'
    }, {
        name: 'Brother in law',
        checked: false,
        class: 'col-md-2'
    }, {
        name: 'Sister in law',
        checked: false,
        class: 'col-md-2'
    }];

    public checkboxPropertiesMapping = {
        model: 'checked',
        value: 'name',
        label: 'name',
        baCheckboxClass: 'class'
    };
  constructor() {
  }

}
