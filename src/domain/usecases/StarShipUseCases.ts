
import { Observable } from "rxjs";
import { UseCase } from "../base/utils/UseCase";
import { StartShipResult } from "../models/StarShip";

export class StarShipUseCases implements UseCase<{id:1},StartShipResult>{
    execute(params: { id: 1; }): Observable<StartShipResult> {
        throw new Error("Method not implemented.");
    }

}