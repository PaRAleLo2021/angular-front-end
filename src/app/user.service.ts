import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private webReqService: WebRequestService) { }

  SignUp(username: string, email: string, password: string) {
    return this.webReqService.post('users/register', {username, email, password});
  }
}
