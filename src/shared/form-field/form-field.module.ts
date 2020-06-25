import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ButtonDirective } from './directives/button.directive';
import { InputRefDirective } from './directives/input-ref.directive';

@NgModule({
  declarations: [FormFieldComponent, InputRefDirective, ButtonDirective, CheckboxComponent],
  exports: [
    CommonModule,
    FormsModule,
    FormFieldComponent,
    CheckboxComponent,
    InputRefDirective,
    ButtonDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormFieldModule { }
