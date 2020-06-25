import { Component, ContentChild, Input } from '@angular/core';
import { InputRefDirective } from '@shared/form-field/directives/input-ref.directive';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent {
  @ContentChild(InputRefDirective, { static: true }) input: InputRefDirective;
  @Input() label: string;
  @Input() color: 'primary' | 'secondary' | 'danger' | 'light' | 'dark' = 'primary';
  constructor() { }

  get getCheckedState(): boolean {
    return this.input ? this.input.element.checked : false;
  }

}
