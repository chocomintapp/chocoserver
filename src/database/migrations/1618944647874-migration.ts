import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1618944647874 implements MigrationInterface {
  name = "migration1618944647874";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "network" ("created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "chainId" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9f79766aae97061ce6d051470ad" PRIMARY KEY ("chainId"))`
    );
    await queryRunner.query(
      `CREATE TABLE "block" ("created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "blockNumber" integer NOT NULL, "networkChainId" integer NOT NULL, CONSTRAINT "PK_f7f87af1393645db67b170e4375" PRIMARY KEY ("blockNumber", "networkChainId"))`
    );
    await queryRunner.query(
      `ALTER TABLE "block" ADD CONSTRAINT "FK_1041ae57ef0156659fd89581e14" FOREIGN KEY ("networkChainId") REFERENCES "network"("chainId") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "block" DROP CONSTRAINT "FK_1041ae57ef0156659fd89581e14"`);
    await queryRunner.query(`DROP TABLE "block"`);
    await queryRunner.query(`DROP TABLE "network"`);
  }
}
