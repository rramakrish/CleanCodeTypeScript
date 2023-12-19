
import { StarShipModel } from "domain/base/models/StarShipModel";
import { StarWarsModel } from "domain/base/models/StarWarsModel";
import { Observable } from "rxjs";

export interface IStarWars{
    getPeople:()=>Observable<StarWarsModel>
    getStarShip:()=>Observable<StarShipModel>
}