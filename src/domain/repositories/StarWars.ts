

import { Observable } from "rxjs";
import { PeopleModel } from "../models/StarWarsPeople";
import { StartShipModel } from "../models/StarShip";
import { PeopleEntity } from "./entity/StarWarsPeople";

export interface IStarWars{
    getPeople:()=>Observable<PeopleModel>
    getStarShip:()=>Observable<StartShipModel>
}