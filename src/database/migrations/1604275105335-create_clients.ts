import {MigrationInterface, QueryRunner} from "typeorm";

export class createClients1604275105335 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('clients');
    }

}
