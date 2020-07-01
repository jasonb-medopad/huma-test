import { Component, OnInit } from '@angular/core';
import { User } from '@shared/models/user';
import { SharedService } from '@shared/services/shared.service';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs';

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
  reasonUpdated = false;
  doctors$: Observable<User>;
  reasonSub$: Subscription;
  REASON_STYLE_TIMEOUT = 500;

  possibleConditions: string[] = [
    'Smoker',
    'Drinker',
    'Diabetic',
    'Dementia',
    'Stroke'
  ];

  constructor(
    private sharedService: SharedService
  ) {
    this.reasonSub$ = sharedService.reasonChange.subscribe((value) => {
      this.extraData.reason = value;
      this.reasonUpdated = true;
      setTimeout(() => {
        this.reasonUpdated = false;
      }, this.REASON_STYLE_TIMEOUT);
    });
   }

  ngOnInit(): void {
    this.user = this.sharedService.user;
    this.doctors$ = this.sharedService.getUsers();
  }

  onConditionClick(condition: string): void {
    this.sharedService.updateReasonForMonitoring(condition);
  }

}
