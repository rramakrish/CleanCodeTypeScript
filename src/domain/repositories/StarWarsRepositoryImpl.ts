import { Observable } from "rxjs";
import { IStarWars } from "./StarWars";
import { PeopleResult } from "../models/StarWarsPeople";
import { StartShipResult } from "../models/StarShip";

export class StarWarsRepositoryImpl implements IStarWars{
    // this uses the mappers for data conversion
    getPeople(): Observable<PeopleResult>{
        throw new Error("Method not implemented.");
    }
    getStarShip(): Observable<StartShipResult>{
        throw new Error("Method not implemented.");
    }

}