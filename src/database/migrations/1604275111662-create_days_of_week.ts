import {MigrationInterface, QueryRunner} from "typeorm";

export class createDaysOfWeek1604275111662 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('days_of_week');
    }

}
