export class Game{
    _id: string;
    roomStatus: number;
    privateRoom: boolean;
    players: {
        userID: string,
        score: number,
        cards: number[]
    }[];
    unusedCards: number[];
    storytellerID: string;

    constructor(_id: string, roomStatus: number, privateRoom: boolean, players: {userID: string, score: number, cards: number[] }[], unusedCards: number[], storytellerID: string) {
        this._id = _id;
        this.roomStatus = roomStatus;
        this.privateRoom = privateRoom;
        this.players = players;
        this.unusedCards = unusedCards;
        this.storytellerID = storytellerID;
    }
}