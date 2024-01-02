
import { Observable } from "rxjs";
import { UseCase } from "../base/utils/UseCase";
import { StartShipModel } from "../models/StarShip";

export class StarShipUseCases implements UseCase<{id:1},StartShipModel>{
    execute(params: { id: 1; }): Observable<StartShipModel> {
        throw new Error("Method not implemented.");
    }

}