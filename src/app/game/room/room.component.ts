import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/_include/game.service';
import { TokenStorageService } from 'src/app/_include/token-storage.service';
import { User } from 'src/app/_include/user.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  isGame = false;
  isFailedPrivateAdd = false;
  privateAddErrorMessage = "";
  gameID: string = null;
  game: any;

  constructor(private token: TokenStorageService, private gameService: GameService) { }
  user: User;

  ngOnInit(): void {
    this.user = this.token.getUser();
  }

  openGame () {
    if(this.gameID)
      window.open("http://localhost:8080/?username="+this.user.username+"&gameid"+this.gameID, "_blank");
  }

  createPrivate () {
    let roomStatus = 0; 
    let privateRoom = true;
    let players: [{ userID: string, score: number, cards: [number]}] = [{ "userID": this.user.username, "score": 0, "cards": [0]}];
    let unusedCards: [number] = null;
    let storytellerID = this.user.username;

    this.gameService.CreateGame(roomStatus, privateRoom,
      players, unusedCards, storytellerID).subscribe(
      data => {
        if(data["game"] != null){
          this.game = data["game"];
          this.isGame = true;
          this.gameID = this.game["_id"];
          this.isFailedPrivateAdd = false;
          console.log("create private game successful "+this.game);
          this.openGame();
        } else {
          console.log("create private game unsuccessful "+data["game"]);
        }
      },
      err => {
        console.log("create private game room failed "+err);
      }
    );
  }

  joinPrivate (id: string) {
    let userID = this.user["username"];
    let score = this.user["score"];
    let cards: [number] = null;
    let _id = id;
    console.log (userID, score, cards, _id);
    this.gameService.AddPlayer(userID, score, cards, _id).subscribe(
      data => {
        if(data["game"] != null){
          this.game = data["game"];
          this.isGame = true;
          this.gameID = this.game["_id"];
          this.isFailedPrivateAdd = false;
          console.log("join private game successful "+this.game);
          this.openGame();
        } else {
          this.isFailedPrivateAdd = true;
          this.privateAddErrorMessage = "Game ID is incorect. Try another ID.";
          console.log("join private game unsuccessful "+data["game"]);
        }
      },
      err => {
        this.privateAddErrorMessage = err.error.message;
        this.isFailedPrivateAdd = true;
        console.log("Join private game room failed "+err);
      }
    );
  }

  joinPublic () {
    this.isGame = true;
    this.gameID = "asdasdasda";
  }

}
