import { Observable } from "rxjs";
import { UseCase } from "../base/utils/UseCase";
import { PeopleModel } from "../models/StarWarsPeople";
import { IStarWars } from "../repositories/StarWars";

export class FamousPeopleUseCases implements UseCase<{id:1},PeopleModel>{
    constructor(private repository:IStarWars){}
    //this uses the repository to ultimately call the service
    execute(params: { id: 1; }): Observable<PeopleModel> {
        return this.repository.getPeople()
    }

}