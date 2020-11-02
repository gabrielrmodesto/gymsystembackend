import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createVerifyCode1604275073722 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "verify_code",
				columns: [
					{
						name: "id_verify_code",
						type: "integer",
						isPrimary: true,
						isGenerated: true,
						generationStrategy: "increment",
					},
					{
						name: "verify_code",
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
						name: "fk_verify_code_user1",
						columnNames: ["user_id_user"],
						referencedTableName: "user",
						referencedColumnNames: ["id_user"],
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("verify_code");
	}
}
