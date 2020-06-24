import { Component, OnInit } from "@angular/core";
import { SharedService } from "@shared/services/shared.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  get user() {
    return this.sharedService.user;
  }
  ngOnInit(): void {}
}
