import {MigrationInterface, QueryRunner} from "typeorm";

export class createTypeUser1604275053841 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('type_user');
    }

}
