import {MigrationInterface, QueryRunner} from "typeorm";

export class createRefreshToken1604275088041 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('refresh_token');
    }

}
