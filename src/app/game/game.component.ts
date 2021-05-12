import { Component, OnInit } from '@angular/core';
import { UserService } from '../include/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.gameUsers();
  }

  private gameUsers() {
    this.userService.AllUsers().subscribe((response: any) => {
      return response;
    });
  }

}
