import { Mapper } from "src/domain/base/utils/Mapper";
import { PeopleEntity } from "../entity/StarWarsPeople";
import { People, PeopleModel } from "src/domain/models/StarWarsPeople";

export class EntityModelMapper extends Mapper<PeopleEntity, PeopleModel> {
    override mapTo(param: PeopleModel): PeopleEntity {
        throw new Error("Method not implemented.");
    }
    mapFrom(param: PeopleEntity): PeopleModel {
        return {
            count: param.count,
            next: param.next,
            previous: param.previous,
            results: param.results.map((data) => <People>{
                name: data.name,
                height: data.height,
                mass: data.mass,
                hair_color: data.hair_color,
                skin_color: data.skin_color,
                eye_color: data.eye_color,
                birth_year: data.birth_year,
                gender: data.gender,
                homeworld: data.homeworld,
                films: data.films,
                species: data.species,
                vehicles: data.vehicles,
                starships: data.starships,
                created: data.created,
                edited: data.edited,
                url: data.url
            })
        };
    }
    // mapTo(param: UserModel): UserEntity {
    //     return {
    //         id: param.id,
    //         name: param.fullName,
    //         userName: param.username,
    //         phoneNumber: param.phoneNum,
    //         userPicture: param.profilePicture,
    //         activationStatus: param.activationStatus
    //     }
    // }
}