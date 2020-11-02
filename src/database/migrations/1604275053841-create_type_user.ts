import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTypeUser1604275053841 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "type_user",
				columns: [
					{
						name: "id_type_user",
						type: "integer",
						isPrimary: true,
						isGenerated: true,
						generationStrategy: "increment",
					},
					{
						name: "type_user",
						type: "varchar",
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("type_user");
	}
}
