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
						name: "fk_days_of_week_has_clients_days_of_week1",
						columnNames: ["days_of_week_id_days_of_week"],
						referencedTableName: "days_of_week",
						referencedColumnNames: ["id_days_of_week"],
					},
					{
						name: "fk_days_of_week_has_clients_clients1",
						columnNames: ["clients_id_clients"],
						referencedTableName: "clients",
						referencedColumnNames: ["id_clients"],
						onUpdate: "CASCADE",
						onDelete: "CASCADE",
					},
					{
						name: "fk_days_of_week_has_clients_hour_of_exercise1",
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
