import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('exercises_quantity_number')
export default class ExercisesQuantityNumber {
  @PrimaryGeneratedColumn('increment')
  id_exercises_quantity_number: number;

  @Column()
  exercises_quantity_number: string;
}
