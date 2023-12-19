import { UseCase } from "domain/base/UseCase";
import { StarWarsModel } from "domain/base/models/StarWarsModel";
import { Observable } from "rxjs";

export class StarShipUseCases implements UseCase<{id:1},StarWarsModel>{
    execute(params: { id: 1; }): Observable<StarWarsModel> {
        throw new Error("Method not implemented.");
    }

}