import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createRefreshToken1604275088041 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'refresh_token',
        columns: [
          {
            name: 'id_refresh_token',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'refresh_token',
            type: 'varchar',
          },
          {
            name: 'expired_at',
            type: 'timestamp',
          },
          {
            name: 'token_user_id_token_user',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_refresh_token_token_user1',
            columnNames: ['token_user_id_token_user'],
            referencedTableName: 'token_user',
            referencedColumnNames: ['id_token_user'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('refresh_token');
  }
}
