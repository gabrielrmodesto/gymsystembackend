import { getRepository, Repository } from "typeorm";
import IUserDTO from "../DTO/UserDTO";
import User from "../models/User";
import IUserRepository from "./IUserRepository";

export default class UserRepository implements IUserRepository{
	private ormRepository: Repository<User>

	constructor(){
		this.ormRepository = getRepository(User);
	}

	async create(User: IUserDTO): Promise<User>{
		const user = await this.ormRepository.save(User);
		return user;
	}
}
