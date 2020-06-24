
import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
@Directive({
  selector: '[inputRef]'
})
export class InputRefDirective {

  public element: HTMLInputElement;
  public control: NgControl;

  constructor(
    private el: ElementRef,
    private ctrl: NgControl
  ) {
    this.element = this.el.nativeElement;
    this.control = this.ctrl;
  }

}
