import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTokenUser1604275082915 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "token_user",
				columns: [
					{
						name: "id_token_user",
						type: "integer",
						unsigned: true,
						isPrimary: true,
						isGenerated: true,
						generationStrategy: "increment",
					},
					{
						name: "token_user",
						type: "varchar",
					},
					{
						name: "expired_at",
						type: "timestamp",
					},
					{
						name: "user_id_user",
						type: "integer",
					},
				],
				foreignKeys: [
					{
						name: "UserID",
						columnNames: ["user_id_user"],
						referencedTableName: "user",
						referencedColumnNames: ["id_user"],
					},
				],
			})
		);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('token_user');
    }

}
