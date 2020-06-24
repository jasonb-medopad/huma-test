import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormFieldComponent } from './components/form-field.component';
import { InputRefDirective } from './directives/input-ref.directive';



@NgModule({
  declarations: [FormFieldComponent, InputRefDirective],
  exports: [
    CommonModule,
    FormsModule,
    FormFieldComponent,
    InputRefDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormFieldModule { }
