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
    let players: [{ userID: string, score: number, cards: [number], playedCard: string, votedCard: string}] = [{ "userID": this.user.username, "score": 0, "cards": [0], playedCard: " ", votedCard: " "}];
    let unusedCards: number[] = [0];
    let storytellerID = this.user.username;
    let story = " ";
    let storytellerCard = " ";
    let winner : string[]= [" ", " ", " ", " "];

    this.gameService.CreateGame(roomStatus, privateRoom,
      players, unusedCards, storytellerID, story, storytellerCard, winner).subscribe(
      data => {
        if(data["game"] != null){
          this.game = data["game"];
          this.isGame = true;
          this.gameID = this.game["_id"];
          this.isFailedPrivateAdd = false;
          console.log("create private game successful "+JSON.stringify({game: this.game}, null, 4));
          this.openGame();
        } else {
          console.log("create private game unsuccessful "+JSON.stringify({game: data}, null, 4));
        }
      },
      err => {
        console.log("create private game room failed "+err["message"]+JSON.stringify({error: err}, null, 4));
      }
    );
  }

  joinPrivate (id: string) {
    let userID = this.user["username"];
    let score = this.user["score"];
    let cards: number[] = null;
    let playedCard: string = "";
    let votedCard: string = "";
    let _id = id;
    console.log (userID, score, cards, _id);
    this.gameService.JoinPrivateGame(userID, score, cards, playedCard, votedCard, _id).subscribe(
      data => {
        if(data["game"] != null){
          this.game = data["game"];
          this.isGame = true;
          this.gameID = this.game["_id"];
          this.isFailedPrivateAdd = false;
          console.log("join private game successful "+JSON.stringify({game: this.game}, null, 4));
          this.openGame();
        } else {
          this.isFailedPrivateAdd = true;
          this.privateAddErrorMessage = "Game ID is incorect. Try another ID.";
          console.log("join private game unsuccessful "+JSON.stringify({game: data["game"]}, null, 4));
        }
      },
      err => {
        this.privateAddErrorMessage = err.error.message;
        this.isFailedPrivateAdd = true;
        console.log("Join private game room failed "+JSON.stringify({game: err}, null, 4));
      }
    );
  }

  joinPublic () {
    let userID = this.user["username"];
    let score = this.user["score"];
    let cards: number[] = null;
    let playedCard: string = "";
    let votedCard: string = "";
    console.log (userID, score, cards);
    this.gameService.JoinPublicGame(userID, score, cards, playedCard, votedCard).subscribe(
      data => {
        if(data["game"] != null){
          this.game = data["game"];
          this.isGame = true;
          this.gameID = this.game["_id"];
          this.isFailedPrivateAdd = false;
          console.log("join private game successful "+JSON.stringify({game: this.game}, null, 4));
          this.openGame();
        } else {
          this.isFailedPrivateAdd = true;
          this.privateAddErrorMessage = "Game ID is incorect. Try another ID.";
          console.log("join private game unsuccessful "+JSON.stringify({game: data["game"]}, null, 4));
        }
      },
      err => {
        this.privateAddErrorMessage = err.error.message;
        this.isFailedPrivateAdd = true;
        console.log("Join private game room failed "+JSON.stringify({game: err}, null, 4));
      }
    );
  }

}
