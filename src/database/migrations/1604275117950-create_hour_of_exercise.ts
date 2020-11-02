import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createHourOfExercise1604275117950 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "hour_of_exercise",
				columns: [
					{
						name: "id_hour_of_exercise",
						type: "integer",
						isPrimary: true,
						isGenerated: true,
						generationStrategy: "increment",
					},
					{
						name: "hour_of_exercise",
						type: "varchar",
					},
				],
			})
		);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('hour_of_exercise');
    }

}
