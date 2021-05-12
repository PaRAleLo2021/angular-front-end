import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../include/user.model';
import { UserService } from '../include/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'email', 'rank', 'createdAt', 'updatedAt'];
  users: Observable<User[]>;
  count: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.gameUsers();
  }

  private gameUsers(){
    this.userService.AllUsers().subscribe((response: any) => {
      this.users = response.users;
      this.count = response.count;
    });
  }

}