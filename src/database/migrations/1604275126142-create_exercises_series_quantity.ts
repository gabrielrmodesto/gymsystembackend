import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createExercisesSeriesQuantity1604275126142 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "exercises_series_quantity",
				columns: [
					{
						name: "id_exercises_series_quantity",
						type: "integer",
						isPrimary: true,
						unsigned: true,
						isGenerated: true,
						generationStrategy: "increment",
					},
					{
						name: "exercises_series_quantity",
						type: "varchar",
					},
				],
			})
		);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('exercises_series_quantity');
    }

}
