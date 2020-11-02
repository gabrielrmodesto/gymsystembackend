import {MigrationInterface, QueryRunner} from "typeorm";

export class createVerifyCode1604275073722 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('verify_code');
    }

}
