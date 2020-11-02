import {MigrationInterface, QueryRunner} from "typeorm";

export class createHourOfExercise1604275117950 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('hour_of_exercise');
    }

}
