import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import TokenUser from './TokenUser';

@Entity("refresh_token")
export default class RefreshToken {
	@PrimaryGeneratedColumn("increment")
	id_refresh_token: number;

	@Column()
	refresh_token: string;

	@Column()
	expired_at: number;

	@ManyToOne(() => TokenUser, token_user_id_token_user => token_user_id_token_user.id_token_user)
	@JoinColumn({ name: 'id_user'})
	token_user_id_token_user: TokenUser;
}
