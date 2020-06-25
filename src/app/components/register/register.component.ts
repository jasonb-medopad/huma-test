import { Component } from '@angular/core';
import { routes } from '@shared/helpers/routes';
import { SharedService } from '@shared/services/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  model: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    rpassword: string;
    tel: string;
    acceptTC: boolean;
  } = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rpassword: '',
    tel: '',
    acceptTC: null
  };
  loading = false;

  constructor(private sharedService: SharedService) {}

  get user() {
    return this.sharedService.user;
  }

  back() {
    this.sharedService.navigate([routes.auth.login]);
  }

  continue() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.sharedService.save(this.model);
      this.sharedService.navigate([routes.home.dashboard]);
    }, 2000);

  }
}
