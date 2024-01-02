import { IStarWars } from "src/domain/repositories/StarWars";
import { StarWarsRepositoryImpl } from "src/domain/repositories/StarWarsRepositoryImpl";

export const container = {
    starWarsRepository:new StarWarsRepositoryImpl() as IStarWars
}