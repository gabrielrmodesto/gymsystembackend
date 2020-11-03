import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("hour_of_exercise")
export default class HourOfExercise {
	@PrimaryGeneratedColumn("increment")
	id_hour_of_exercise: number;

	@Column()
	hour_of_exercise: string;
}
