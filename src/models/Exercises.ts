import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("exercises")
export default class Exercises {
	@PrimaryGeneratedColumn("increment")
	id_exercises: number;

	@Column()
	exercise_name: string;
}
