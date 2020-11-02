import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createDaysOfWeekHasClients1604275174948 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "days_of_week_has_clients",
				columns: [
					{
						name: "id_days_of_week_has_clients",
						type: "integer",
						isPrimary: true,
						unsigned: true,
						isGenerated: true,
						generationStrategy: "increment",
					},
					{
						name: "days_of_week_id_days_of_week",
						type: "integer",
					},
					{
						name: "clients_id_clients",
						type: "integer",
					},
					{
						name: "hour_of_exercise_id_hour_of_exercise",
						type: "integer",
					}
				],
				foreignKeys: [
					{
						name: "DaysOfWeekID",
						columnNames: ["days_of_week_id_days_of_week"],
						referencedTableName: "days_of_week",
						referencedColumnNames: ["id_days_of_week"],
					},
					{
						name: "ClientID",
						columnNames: ["clients_id_clients"],
						referencedTableName: "clients",
						referencedColumnNames: ["id_clients"],
						onUpdate: "CASCADE",
						onDelete: "CASCADE",
					},
					{
						name: "HourOfExerciseID",
						columnNames: ["hour_of_exercise_id_hour_of_exercise"],
						referencedTableName: "hour_of_exercise",
						referencedColumnNames: ["id_hour_of_exercise"],
					},
				],
			})
		);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('days_of_week_has_clients');
    }

}
