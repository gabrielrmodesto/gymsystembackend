import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createExercisesQuantityNumber1604275133737 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "exercises_quantity_number",
				columns: [
					{
						name: "id_exercises_quantity_number",
						type: "integer",
						isPrimary: true,
						isGenerated: true,
						generationStrategy: "increment",
					},
					{
						name: "exercises_quantity_number",
						type: "varchar",
					},
				],
			})
		);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('exercises_quantity_number');
    }

}
