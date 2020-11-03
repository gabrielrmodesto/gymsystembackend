import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("clients")
export default class Clients {
	@PrimaryGeneratedColumn("increment")
	id_clients: number;

	@Column()
	name: string;
}
