import { Component } from '@angular/core';
import { UiChildService } from 'ui-child';

@Component({
  selector: 'lib-ui-parent',
  template: `
    <p>
      ui-parent works! (Answer is {{ answer }})
      <lib-ui-child></lib-ui-child>
    </p>
  `,
})
export class UiParentComponent {
  answer: Number
  constructor(uiChildService: UiChildService) {
    this.answer = uiChildService.getAnswer()
  }
}
