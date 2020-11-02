import {MigrationInterface, QueryRunner} from "typeorm";

export class createExercises1604275140450 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('exercises');
    }

}
