import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/include/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login(email: string, pws: string) {
    this.userService.SignIn(email, pws).subscribe((response: any) => {
      console.log(response)
    });
  }
}
