import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_include/token-storage.service';
import { UserService } from 'src/app/_include/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  message: string = "";
  isMessage = false;
  isError = false;

  constructor(private userService: UserService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  login(email: string, pws: string) {
    this.userService.SignIn(email, pws).subscribe(
      data => {
        let data2: any = data;
        this.tokenStorage.saveToken(data2['token']);
        this.tokenStorage.saveUser(data2['user']);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
        console.log("logged in successfull "+data);
      },
      err => {
        this.message = err["error"]["message"];
        this.isError = true;
        this.isLoginFailed = true;
        console.log("logged in failed "+err);
      }
    );
  }

  reloadPage(): void {
    this.router.navigate(['profile']).then(() => {
      window.location.reload();
    });
    
  }
}