import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createDaysOfWeek1604275111662 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "days_of_week",
				columns: [
					{
						name: "id_days_of_week",
						type: "integer",
						isPrimary: true,
						unsigned: true,
						isGenerated: true,
						generationStrategy: "increment",
					},
					{
						name: "day_of_week",
						type: "varchar",
					},
				],
			})
		);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('days_of_week');
    }

}
