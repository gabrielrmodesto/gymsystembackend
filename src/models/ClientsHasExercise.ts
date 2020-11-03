import { Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Clients from './Clients';
import Exercises from './Exercises';
import ExercisesQuantityNumber from './ExercisesQuantityNumber';
import ExercisesSeriesQuantity from './ExerciseSeriesQuantity';

@Entity("clients_has_exercises")
export default class ClientsHasExercise {
	@PrimaryGeneratedColumn("increment")
	id_clients_has_exercises: number;

	@ManyToMany(() => Clients, clients_id_clients => clients_id_clients.id_clients)
	@JoinColumn({ name: 'id_clients'})
	clients_id_clients: Clients;

	@ManyToMany(() => Exercises, exercises_id_exercises => exercises_id_exercises.id_exercises)
	@JoinColumn({ name: 'id_exercises'})
	exercises_id_exercises: Exercises;

	@OneToOne(() => ExercisesQuantityNumber, exercises_quantity_number_id_exercises_quantity_number => exercises_quantity_number_id_exercises_quantity_number.id_exercises_quantity_number)
	@JoinColumn({ name: 'id_exercises_quantity_number'})
	exercises_quantity_number_id_exercises_quantity_number: ExercisesQuantityNumber;

	@OneToOne(() => ExercisesSeriesQuantity, exercises_series_quantity_id_exercises_series_quantity => exercises_series_quantity_id_exercises_series_quantity.id_exercises_series_quantity)
	@JoinColumn({ name: 'id_exercises_series_quantity'})
	exercises_series_quantity_id_exercises_series_quantity: ExercisesSeriesQuantity;
}
