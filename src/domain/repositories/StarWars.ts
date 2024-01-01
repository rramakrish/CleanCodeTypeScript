

import { Observable } from "rxjs";
import { PeopleResult } from "../models/StarWarsPeople";
import { StartShipResult } from "../models/StarShip";

export interface IStarWars{
    getPeople:()=>Observable<PeopleResult>
    getStarShip:()=>Observable<StartShipResult>
}