import { StarShipModel } from "domain/base/models/StarShipModel";
import { StarWarsModel } from "domain/base/models/StarWarsModel";
import { Observable } from "rxjs";
import { IStarWars } from "./StarWars";

export class StarWarsRepositoryImpl implements IStarWars{
    // this uses the mappers for data conversion
    getPeople(): Observable<StarWarsModel>{
        throw new Error("Method not implemented.");
    }
    getStarShip(): Observable<StarShipModel>{
        throw new Error("Method not implemented.");
    }

}