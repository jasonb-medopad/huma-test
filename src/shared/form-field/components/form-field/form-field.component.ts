import { AfterContentInit, Component, ContentChild, HostBinding, Input } from '@angular/core';
import { InputRefDirective } from '../../directives/input-ref.directive';

@Component({
  selector: 'form-field',
  templateUrl: './form-field.component.html'
})
export class FormFieldComponent implements AfterContentInit {

  @ContentChild(InputRefDirective, { static: true }) input: InputRefDirective;
  readonly: boolean;
  @Input() mode: 'bootstrap' | 'md' = 'bootstrap';

  constructor() { }

  @HostBinding('class')
  get classes() {
    return `${this.mode}`;
  }

  @HostBinding('class.readonly')
  get getReadOnlyState(): boolean {
    return this.input && this.readonly;
  }

  @HostBinding('class.is-dirty')
  get getDirtyState(): boolean {
    return this.input ? this.input.control.dirty : false;
  }

  @HostBinding('class.is-touched')
  get getTouchedState(): boolean {
    return this.input ? this.input.control.touched : false;
  }

  @HostBinding('class.is-valid')
  get getValidState(): boolean {
    return this.input && this.input.control.dirty ? this.input.control.valid : false;
  }

  @HostBinding('class.is-invalid')
  get getInvalidState(): boolean {
    const state = this.input ? this.input.control.invalid : false;
    if (this.input && this.input.control.touched) {
      state
        ? this.input.element.classList.add('is-invalid')
        : this.input.element.classList.remove('is-invalid');
      return state;
    }
    return false;
  }

  ngAfterContentInit(): void {
    if (!this.input) {
      console.error('form field needs an input element; add inputRef directive to input element');
      return;
    }

    if (this.input) {
      this.readonly = this.input.element.readOnly;
      this.input.element.id = this.input.element.name;
    }
  }

}
