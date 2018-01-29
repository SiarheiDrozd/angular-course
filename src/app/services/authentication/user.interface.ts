export interface UserInterface {
  id: number;
  name: {
    first: string;
    last: string;
  };
  login: string;
  password: string;
  editPermition: boolean;
}
