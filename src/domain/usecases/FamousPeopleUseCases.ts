import { Observable } from "rxjs";
import { UseCase } from "../base/utils/UseCase";
import { PeopleResult } from "../models/StarWarsPeople";

export class FamousPeopleUseCases implements UseCase<{id:1},PeopleResult>{
    //this uses the repository to ultimately call the service
    execute(params: { id: 1; }): Observable<PeopleResult> {
        throw new Error("Method not implemented.");
    }

}