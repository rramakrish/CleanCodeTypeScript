import { Observable } from "rxjs";
import { UseCase } from "../base/utils/UseCase";
import { PeopleModel } from "../models/StarWarsPeople";

export class FamousPeopleUseCases implements UseCase<{id:1},PeopleModel>{
    //this uses the repository to ultimately call the service
    execute(params: { id: 1; }): Observable<PeopleModel> {
        throw new Error("Method not implemented.");
    }

}