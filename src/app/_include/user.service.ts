import { Injectable } from '@angular/core';
import { WebRequestService } from './_helpers/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private webReqService: WebRequestService) { }

  SignUp(username: string, email: string, password: string) {
    return this.webReqService.postUser('users/register', {username, email, password});
  }

  AllUsers() {
    return this.webReqService.getUser('users/get/all');
  }

  SignIn(email: string, password: string) {
    return this.webReqService.postUser('users/login', {email, password});
  }

  UpdateProfile(_id: string, username: string, email: string, password: string) {
    return this.webReqService.patchUser('users/patch', {_id, username, email, password});
  }
}
