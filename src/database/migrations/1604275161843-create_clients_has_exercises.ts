import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createClientsHasExercises1604275161843 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "clients_has_exercises",
				columns: [
					{
						name: "id_clients_has_exercises",
						type: "integer",
						isPrimary: true,
						isGenerated: true,
						generationStrategy: "increment",
					},
					{
						name: "clients_id_clients",
						type: "integer",
					},
					{
						name: "exercises_id_exercises",
						type: "integer",
					},
					{
						name: "exercise_series_quantity_id_exercises_series_quantity",
						type: "integer",
					},
					{
						name: "exercises_quantity_number_id_exercises_quantity_number",
						type: "integer",
					},
				],
				foreignKeys: [
					{
						name: "fk_clients_has_exercises_clients1",
						columnNames: ["clients_id_clients"],
						referencedTableName: "clients",
						referencedColumnNames: ["id_clients"],
						onUpdate: "CASCADE",
						onDelete: "CASCADE",
					},
					{
						name: "fk_clients_has_exercises_exercises1",
						columnNames: ["exercises_id_exercises"],
						referencedTableName: "exercises",
						referencedColumnNames: ["id_exercises"],
						onUpdate: "CASCADE",
						onDelete: "CASCADE",
					},
					{
						name: "fk_clients_has_exercises_quantity_exercise1",
						columnNames: ["exercise_series_quantity_id_exercises_series_quantity"],
						referencedTableName: "exercises_series_quantity",
						referencedColumnNames: ["id_exercises_series_quantity"],
						onUpdate: "CASCADE",
						onDelete: "CASCADE",
					},
					{
						name: "fk_clients_has_exercises_exercises_quantity_number1",
						columnNames: ["exercises_quantity_number_id_exercises_quantity_number"],
						referencedTableName: "exercises_quantity_number",
						referencedColumnNames: ["id_exercises_quantity_number"],
						onUpdate: "CASCADE",
						onDelete: "CASCADE",
					},
				],
			})
		);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('clients_has_exercises');
    }

}
