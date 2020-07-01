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
  doctors$: Observable<User>;
  reasonSub$: Subscription;

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
