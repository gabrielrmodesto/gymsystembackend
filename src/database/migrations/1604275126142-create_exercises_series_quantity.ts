import {MigrationInterface, QueryRunner} from "typeorm";

export class createExercisesSeriesQuantity1604275126142 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('exercises_series_quantity');
    }

}
