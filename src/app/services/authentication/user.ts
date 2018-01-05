export interface User {
  name: string;
  password: string;
  permitions?: {
    edit
  };
}
