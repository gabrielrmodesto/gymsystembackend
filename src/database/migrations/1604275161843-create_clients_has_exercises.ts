import {MigrationInterface, QueryRunner} from "typeorm";

export class createClientsHasExercises1604275161843 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('clients_has_exercises');
    }

}
