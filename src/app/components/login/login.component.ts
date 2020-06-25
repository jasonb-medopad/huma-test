import { Component } from '@angular/core';
import { routes } from '@shared/helpers/routes';
import { SharedService } from '@shared/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  email: string;
  loading = false;

  constructor(private sharedService: SharedService) {}

  register() {
    this.sharedService.navigate([routes.auth.register]);
  }

  continue() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.sharedService.save({email: this.email});
      this.sharedService.navigate([routes.home.dashboard]);
    }, 2000);
  }
}
