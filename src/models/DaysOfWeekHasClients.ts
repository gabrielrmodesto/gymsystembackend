import {
  Entity,
  JoinColumn,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Clients from './Clients';
import DaysOfWeek from './DaysOfWeek';
import HourOfExercise from './HourOfExercise';

@Entity('days_of_week_has_clients')
export default class DaysOfWeekHasClients {
  @PrimaryGeneratedColumn('increment')
  id_days_of_week_has_clients: number;

  @ManyToMany(
    () => DaysOfWeek,
    (days_of_week_id_days_of_week) =>
      days_of_week_id_days_of_week.id_days_of_week
  )
  @JoinColumn({ name: 'id_days_of_week' })
  days_of_week_id_days_of_week: DaysOfWeek;

  @ManyToMany(
    () => Clients,
    (clients_id_clients) => clients_id_clients.id_clients
  )
  @JoinColumn({ name: 'id_clients' })
  clients_id_clients: Clients;

  @OneToOne(
    () => HourOfExercise,
    (hour_of_exercise_id_hour_of_exercise) =>
      hour_of_exercise_id_hour_of_exercise.id_hour_of_exercise
  )
  @JoinColumn({ name: 'id_hour_of_exercise' })
  hour_of_exercise_id_hour_of_exercise: HourOfExercise;
}
