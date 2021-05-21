export class Game{
    _id: number;
    roomStatus: number;
    privateRoom: boolean;
    players: {
        userID: string;
        score: number;
        cards: number[]; 
    }[];
    unusedCards: number[];
    storytellerID: string;
}