import {MigrationInterface, QueryRunner} from "typeorm";

export class createUser1604275063929 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('user');
    }

}
