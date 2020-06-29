
import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTransactions1593429418419 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
     await queryRunner.createTable(
       new Table({
        name:"transactions",
        columns:[
          {
            name:"id",
            type:"varchar",
            isPrimary:true,
            generationStrategy:"uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "title",
            type: "varchar"
          },
          {
            name:"value",
            type:"int"
          },
          {
            name: "type",
            type: "varchar"
          },
          {
            name:"category_id",
            type:"uuid",
            isNullable:true
          },
          {
              name:"created_at",
              type: "timestamp",
           default:"now()"
          },
          {
              name:"updated_at",
              type: "timestamp",
           default:"now()"
          }


        ]
       })
     )

     await queryRunner.createForeignKey("transactions",new TableForeignKey({
      name:"TransactionType",//fürs löschen
      columnNames:["category_id"],
      referencedColumnNames:["id"],
      referencedTableName:"categories",
      onDelete:"SET NULL",//"RESTRICT"_> user darf nicht gelöscht werden; "CASCADE" -> wenn user löscht, alle appointments mit ihm löschen
      onUpdate:"CASCADE"
  }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropForeignKey("transactions","TransactionType")
      await queryRunner.dropTable("transactions")
    }

}