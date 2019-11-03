export class UserModel {

  userId: number;
  userName: string;
  userStatus: UserStatus;

  constructor(userId: number, userName: string, userStatus: UserStatus) {
    this.userId = userId;
    this.userName = userName;
    this.userStatus = userStatus;
  }
}
