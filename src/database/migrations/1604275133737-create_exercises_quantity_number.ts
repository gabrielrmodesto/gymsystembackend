import {MigrationInterface, QueryRunner} from "typeorm";

export class createExercisesQuantityNumber1604275133737 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('exercises_quantity_number');
    }

}
