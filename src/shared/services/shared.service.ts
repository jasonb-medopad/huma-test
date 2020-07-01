import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params, Router } from '@angular/router';
import { User } from '@shared/models/user';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private userData: User;

  get user(): any {
    return this.userData;
  }

  reasonChange: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) {}

  navigate(route: any[], params: Params = {}) {
    this.router.navigate(route, params);
  }

  /**
   * using data to mock clinicians in assigned clinicians panel
   */
  getUsers(): Observable<any> {
    return this.http.get<any[]>('assets/users.json').pipe(
      map((users) => users.slice(0, 5).map(user => new User(user)))
    );
  }

  /**
   * fetch user and add any propertyies that might have
   * already been set in registration or login process
   */
  getCurrentUser(): Observable<any> {
      return this.http.get<any[]>('assets/users.json').pipe(
        map((users) => {
          const randomUser = new User(users[this.randomNumber(10)]);
          this.userData = Object.assign(randomUser, this.userData);
          return new User(this.userData);
        })
      );
  }

  save(data: any) {
    this.userData = Object.assign(this.userData || {}, data);
  }

  randomNumber(max: number) {
    return Math.floor(Math.random() * max);
  }

  updateReasonForMonitoring(reason: string) {
    this.reasonChange.next(reason);
  }

}
