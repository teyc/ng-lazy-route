import { Component } from '@angular/core';
import { UiChildComponent, UiChildService } from 'projects/ui-child/src/public-api';

@Component({
  selector: 'lib-ui-parent',
  template: `
    <p>
      ui-parent works! (Answer is {{ answer }})
    </p>
  `,
  styles: [
  ],
})
export class UiParentComponent {
  answer: Number
  constructor(uiChildService: UiChildService) {
    this.answer = uiChildService.getAnswer()
  }
}
