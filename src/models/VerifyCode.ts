import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from './User';

@Entity("verify_code")
export default class VerifyCode {
	@PrimaryGeneratedColumn("increment")
	id_verify_code: number;

	@Column()
	verify_code: string;

	@Column()
	expired_at: number;

	@ManyToOne(() => User, user_id_user => user_id_user.id_user)
	@JoinColumn({ name: 'id_user'})
	user_id_user: User;
}
