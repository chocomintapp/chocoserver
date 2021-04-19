import { MigrationInterface, QueryRunner } from "typeorm";

export class init1618859149208 implements MigrationInterface {
  name = "init1618859149208";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "network" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "chainId" character varying NOT NULL, CONSTRAINT "PK_8f8264c2d37cbbd8282ee9a3c97" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "block" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "number" integer NOT NULL, "networkId" integer, CONSTRAINT "PK_d0925763efb591c2e2ffb267572" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "block" ADD CONSTRAINT "FK_f1384f7eabd5047d1a9fd85d319" FOREIGN KEY ("networkId") REFERENCES "network"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "block" DROP CONSTRAINT "FK_f1384f7eabd5047d1a9fd85d319"`);
    await queryRunner.query(`DROP TABLE "block"`);
    await queryRunner.query(`DROP TABLE "network"`);
  }
}
