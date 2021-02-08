import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('days_of_week')
export default class DaysOfWeek {
  @PrimaryGeneratedColumn('increment')
  id_days_of_week: number;

  @Column()
  day_of_week: string;
}
