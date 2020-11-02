import {MigrationInterface, QueryRunner} from "typeorm";

export class createTokenUser1604275082915 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('token_user');
    }

}
