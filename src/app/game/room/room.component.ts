import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_include/token-storage.service';
import { User } from 'src/app/_include/user.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor(private token: TokenStorageService) { }
  user: User;

  ngOnInit(): void {
    this.user = this.token.getUser();
  }

  sendUserGameToPhaserClient () {
    
  }

}
