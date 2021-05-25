import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { User } from '../_include/user.model';
import { UserService } from '../_include/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'email', 'rank', 'createdAt', 'updatedAt'];
  //users: Observable<User[]> | undefined;
  count: number | undefined;
  users: MatTableDataSource<any[]>;

  constructor(private userService: UserService) {
    this.users = new MatTableDataSource<any[]>([]);
    this.count = 0;
    this.userService.AllUsers().subscribe((response: any) => {
      this.users = new MatTableDataSource<any[]>(response.users);
      this.count = response.count;
    });
   }

  ngOnInit(): void { }

  private gameUsers(){
    
  }

}