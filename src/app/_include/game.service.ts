import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { WebRequestService } from './_helpers/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private webReqService: WebRequestService) { }

  GetGame(_id: string) {
    return this.webReqService.getGame('games/get/game', {_id});
  }

  CreateGame(roomStatus: number, privateRoom: Boolean,
    players: { userID: string, score: number, cards: [number]},
    unusedCards: [number], storytellerID: string) {
    return this.webReqService.postGame('games/add/game', { roomStatus, privateRoom, players, unusedCards, storytellerID });
  }

  AddPlayer(userID: string, score: number, cards: [number], _id: string) {
    return this.webReqService.postGame('games/add/player', { userID, score, cards, _id });
  }
}
