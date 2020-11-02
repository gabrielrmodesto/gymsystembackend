import {MigrationInterface, QueryRunner} from "typeorm";

export class createDaysOfWeekHasClients1604275174948 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('days_of_week_has_clients');
    }

}
