import { UseCase } from "domain/base/UseCase";
import { StarShipModel } from "domain/base/models/StarShipModel";
import { StarWarsModel } from "domain/base/models/StarWarsModel";
import { Observable } from "rxjs";

export class FamousPeopleUseCases implements UseCase<{id:1},StarShipModel>{
    //this uses the repository to ultimately call the service
    execute(params: { id: 1; }): Observable<StarShipModel> {
        throw new Error("Method not implemented.");
    }

}