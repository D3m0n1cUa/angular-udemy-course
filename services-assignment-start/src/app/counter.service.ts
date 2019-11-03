export class CounterService {
  activeInactive = 0;
  inactiveActive = 0;

  incrementActiveInactiveAction() {
    this.activeInactive ++;
  }

  incrementInactiveActiveAction() {
    this.inactiveActive ++;
  }

  getActiveInactiveActions() {
    return this.activeInactive;
  }

  getInactiveActiveActions() {
    return this.inactiveActive;
  }
}
