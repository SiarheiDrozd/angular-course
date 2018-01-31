import {UserInterface} from './user.interface';

export class User implements UserInterface {

  public id;
  public name: {
    first: string;
    last: string;
  };
  public login: string;
  public password: string;
  public editPermition: boolean;

  constructor(obj?) {
    if (obj) {
      this.id = obj.id;
      this.name = obj.name;
      this.login = obj.login;
      this.password = obj.password;
      this.editPermition = obj.editPermition;
    }
  }
}
