import { Component, OnInit } from "@angular/core";
import { routes } from "@shared/helpers/routes";
import { SharedService } from "@shared/services/shared.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {
  model: {
    mobile: string;
    phone: string;
    email: string;
  } = {
    mobile: "",
    phone: "",
    email: "",
  };

  constructor(private sharedService: SharedService) {}

  get user() {
    return this.sharedService.user;
  }

  ngOnInit(): void {}

  back() {
    this.sharedService.navigate([routes.auth.login]);
  }

  continue() {
    this.sharedService.save(this.model);
    this.sharedService.navigate([routes.auth.verify]);
  }
}
