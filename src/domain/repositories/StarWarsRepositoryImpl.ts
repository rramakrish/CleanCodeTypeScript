import { Observable,from } from "rxjs";
import { map } from 'rxjs/operators';
import { IStarWars } from "./StarWars";
import { PeopleModel } from "../models/StarWarsPeople";
import { StartShipModel } from "../models/StarShip";
import { EntityModelMapper } from "./mapper/entity-model-mapper";


export class StarWarsRepositoryImpl implements IStarWars{
    mapper = new EntityModelMapper()

    private peopleUrl = "https://swapi.dev/api/people/";
    private starShipUrl = "https://swapi.dev/api/starships/";
    // this uses the mappers for data conversion
    getPeople(): Observable<PeopleModel>{
        return from(
            fetch(this.peopleUrl)
                .then((response)=>{
                    if(!response.ok){
                        throw new Error("Something went wrong")
                    }
                    return response.json()
                })
                .then((data) => {return this.mapper.mapFrom(data)})
                .catch((error) => {throw new Error("Something went wrong")})
        );
    }
    getStarShip(): Observable<StartShipModel>{
        throw new Error("Method not implemented.");
    }

}