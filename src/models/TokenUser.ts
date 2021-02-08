import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './User';

@Entity('token_user')
export default class TokenUser {
  @PrimaryGeneratedColumn('increment')
  id_token_user: number;

  @Column()
  token_user: string;

  @Column()
  expired_at: number;

  @ManyToOne(() => User, (user_id_user) => user_id_user.id_user)
  @JoinColumn({ name: 'id_user' })
  user_id_user: User;
}
