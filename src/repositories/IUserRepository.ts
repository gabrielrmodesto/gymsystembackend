import { UpdateResult } from 'typeorm';
import IUserDTO from '../DTO/UserDTO';
import User from '../models/User';

export default interface IUserRepository {
  create(User: IUserDTO): Promise<User>;
  findOneUser(email: string): Promise<User | undefined>;
  updatePassword(id: number, password: string): Promise<UpdateResult>;
}
