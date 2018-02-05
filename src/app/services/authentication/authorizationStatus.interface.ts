import {User} from './user.class';

export interface AuthorizationStatus {
  status: boolean;
  message: string;
  user: User;
}
