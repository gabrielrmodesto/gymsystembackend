import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import TypeUser from './TypeUser';

@Entity("user")
export default class User {
	@PrimaryGeneratedColumn("increment")
	id_user: number;

	@Column()
	name: string;

	@Column()
	login: string;

	@Column()
	password: string;

	@ManyToOne(() => TypeUser, type_user_id_type_user => type_user_id_type_user.id_type_user)
	@JoinColumn({ name: 'id_type_user'})
	type_user_id_type_user: TypeUser;
}
