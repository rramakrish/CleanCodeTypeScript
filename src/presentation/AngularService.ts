import { FamousPeopleUseCases } from "src/domain/usecases/FamousPeopleUseCases";
import { container } from "./dependencies/dependencies";
// This could be an angular service which is a boundary between the UI and the domain ...
const startWarsUseCase  = new FamousPeopleUseCases(container.starWarsRepository)

startWarsUseCase.execute({id:1}).subscribe( 
    { next: (people) => console.log(people), error: (error) => console.log(error)}
);