import {UserModel} from './user.model';
import {Injectable} from '@angular/core';
import {CounterService} from './counter.service';

@Injectable()
export class UsersService {

  users = [
    new UserModel(1, 'Max', UserStatus.Inactive),
    new UserModel(2, 'Manu', UserStatus.Inactive),
    new UserModel(3, 'Chris', UserStatus.Inactive),
    new UserModel(4, 'Anna', UserStatus.Inactive)
  ];

  constructor (private counterService: CounterService) {}

  setUserActive(userId: number) {
    this.counterService.incrementInactiveActiveAction();
    this.getUserByName(userId).userStatus = UserStatus.Active;
  }

  setUserInactive(userId: number) {
    this.counterService.incrementActiveInactiveAction();
    this.getUserByName(userId).userStatus = UserStatus.Inactive;
  }

  getActiveUser() {
    return this.getUsersByStatus(UserStatus.Active);
  }

  getInactiveUser() {
    return this.getUsersByStatus(UserStatus.Inactive);
  }

  private getUsersByStatus(userStatus: UserStatus) {
    return this.users.filter(x => x.userStatus === userStatus);
  }

  private getUserByName(userId: number) {
    return this.users.find(x => x.userId === userId);
  }
}
