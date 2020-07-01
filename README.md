# Huma

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

## Usage

### BUTTON

add custom-button attribute to any button to apply styles.
following properties can be added to buttons to get different style

- **fill** => raised | text | flat | outline | none
- **color** => primary | secondary | danger | light | dark | medium | link
- **expand** => block | none
- **shape** => round | none
- **size** => small | default| large
- **iconButton** => boolean
- **status** => boolean, adds a loading spinner if set to true
- **loadingText** => configure text that appears when in loading state

#### example

```html
  <button custom-button iconButton="true" color="dark" fill="none" (click)="sidenav.classList.toggle('open')">
    <i class="icon-arrow-left"></i>
  </button>
```

### FORMFIELD

A wrapping component around any input, select or textarea. An input reference directive gets the element and control properties of the input element and is made available to the FormFieldComponent. this allow to chnage state of form-field when input state changes. supports boottrap and material design modes.
also allows to add prefix and suffix elements. see example

#### example

```html
<form-field mode="bootstrap">
  <i prefix class="icon-envelop"></i>
  <i suffix class="icon-user"></i>
  <input inputRef name="lastname" #lastNameInput="ngModel" placeholder="Email" [(ngModel)]="email" required email />
    <div error>
      <p *ngIf="lastNameInput?.errors?.required">this field is required</p>
      <p *ngIf="lastNameInput?.errors?.max">this field must have less than 50 characters</p>
    </div>
</form-field>
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
