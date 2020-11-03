import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("exercises_series_quantity")
export default class ExerciseSeriesQuantity {
	@PrimaryGeneratedColumn("increment")
	id_exercises_series_quantity: number;

	@Column()
	exercises_series_quantity: string;
}
