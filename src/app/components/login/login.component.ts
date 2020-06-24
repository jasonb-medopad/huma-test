import { Component, OnInit } from "@angular/core";
import { routes } from "@shared/helpers/routes";
import { SharedService } from "@shared/services/shared.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  model: {
    lastName: string;
    birthDate: string;
    postCode: string;
  } = {
    lastName: "",
    birthDate: "",
    postCode: "",
  };
  loading: boolean;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  continue() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.sharedService.save(this.model);
      this.sharedService.navigate([routes.auth.profile]);
    }, 3000);
  }
}
