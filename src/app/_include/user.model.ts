import { stringify } from "@angular/compiler/src/util";

export class User{
    _id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    score: number;

    constructor(_id: string, username: string, email: string, createdAt: string, updatedAt: string, score: number) {
        this._id = _id;
        this.username = username;
        this.email = email;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.score = score;
    }
}