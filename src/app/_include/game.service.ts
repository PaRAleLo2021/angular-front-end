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

  CreateGame(roomStatus: number, privateRoom: Boolean, players: { userID: string, score: number, cards: number[], playedCard: string, votedCard: string}[], unusedCards: number[], storytellerID: string, story: string, storytellerCard: string, winner: string[]) {
    return this.webReqService.postGame('games/add/game', { roomStatus, privateRoom, players, unusedCards, storytellerID, story, storytellerCard, winner });
  }

  JoinPrivateGame(userID: string, score: number, cards: number[], playedCard: string, votedCard: string, _id: string) {
    return this.webReqService.patchGame('games/add/player', { userID, score, cards, playedCard, votedCard, _id });
  }

  JoinPublicGame(userID: string, score: number, cards: number[], playedCard: string, votedCard: string) {
    return this.webReqService.patchGame('games/join/game', { userID, score, cards, playedCard, votedCard});
  }

}
