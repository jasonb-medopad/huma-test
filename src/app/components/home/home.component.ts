import { Component, OnInit } from '@angular/core';
import { SharedService } from '@shared/services/shared.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  menu = [
    {
      icon: 'chart',
      route: 'dashboard'
    },
    {
      icon: 'user',
      route: 'profile'
    },
    {
      icon: 'bubble',
      route: 'messages'
    },
    {
      icon: 'logout',
      route: '/auth'
    }
  ];

  user$: Observable<any>;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.user$ = this.sharedService.getCurrentUser();
  }
}
