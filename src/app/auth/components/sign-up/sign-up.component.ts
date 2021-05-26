import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/_include/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  message: string = "";
  isMessage = false;
  isError = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  register(username: string, email: string, pws: string) {
   this.userService.SignUp(username, email, pws).subscribe(data => {
      let data2: any = data;
      this.message = `User ${data2["user"]["username"]}, added successfuly`;
      this.isMessage = true;
      this.isError = false;
      console.log("This is the response: "+ data2)
    }, err => {
      this.message = err["error"]["message"];
      this.isMessage = false;
      this.isError = true;
      console.log("This is the response: "+ err)
    });
  }

}
