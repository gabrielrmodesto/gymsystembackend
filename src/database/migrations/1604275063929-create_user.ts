import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUser1604275063929 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id_user',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'login',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'type_user_id_type_user',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_user_type_user',
            columnNames: ['type_user_id_type_user'],
            referencedTableName: 'type_user',
            referencedColumnNames: ['id_type_user'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
