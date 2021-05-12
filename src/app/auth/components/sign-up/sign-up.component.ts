import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/include/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  register(username: string, email: string, pws: string) {
    this.userService.SignUp(username, email, pws).subscribe((response: any) => {
      console.log(response)
    });
  }

}
