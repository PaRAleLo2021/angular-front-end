import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TokenStorageService } from 'src/app/_include/token-storage.service';
import { UserService } from 'src/app/_include/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  isEditable = false;
  email: string;
  username: string;
  password: string;
  

  constructor(public dialog: MatDialog, private token: TokenStorageService, private userService: UserService) {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);
    this.email = this.currentUser.email;
    this.username = this.currentUser.username;
    this.password = "";
  }

  ngOnInit(): void { }

  update(username: string, email: string, password: string) {
    if(username=="")
      username=this.username;
    if(email=="")
      email = this.email;
    console.log(username, email, password);
    this.userService.UpdateProfile(this.currentUser._id,username, email, password).subscribe(
      data => {
        let data2: any = data;
        console.log("logged in successfull "+data2["user"]);
      },
      err => {
        console.log("logged in failed "+err);
      }
    );
    this.logout();
  }

  logout(): void {
    this.token.signOut();
    window.location.reload();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}
