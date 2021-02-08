import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('type_user')
export default class TypeUser {
  @PrimaryGeneratedColumn('increment')
  id_type_user: number;

  @Column()
  type_user: string;
}
