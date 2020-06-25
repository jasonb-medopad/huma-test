import { Component, OnInit } from '@angular/core';
import { User } from '@shared/models/user';
import { SharedService } from '@shared/services/shared.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: User;
  extraData = {
    reason: '',
    contact: '',
    specialist: '',
    date: ''
  };
  doctors$: Observable<User>;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.user = this.sharedService.user;
    this.doctors$ = this.sharedService.getUsers();
  }

}
