import { Service } from '@angular/core';

@Service()
export class LoginService {
  constructor() {}
  login(email: string, password: string) {
    //here we will our backend api
    localStorage.setItem('token', Math.random() + '');
  }
}
