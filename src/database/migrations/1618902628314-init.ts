import {MigrationInterface, QueryRunner} from "typeorm";

export class init1618902628314 implements MigrationInterface {
    name = 'init1618902628314'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "network" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_8f8264c2d37cbbd8282ee9a3c97" PRIMARY KEY ("id")); COMMENT ON COLUMN "network"."id" IS 'chainId'`);
        await queryRunner.query(`CREATE TABLE "block" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" integer NOT NULL, "networkId" integer, CONSTRAINT "PK_d0925763efb591c2e2ffb267572" PRIMARY KEY ("id")); COMMENT ON COLUMN "block"."id" IS 'blockNumber'; COMMENT ON COLUMN "block"."networkId" IS 'chainId'`);
        await queryRunner.query(`ALTER TABLE "block" ADD CONSTRAINT "FK_f1384f7eabd5047d1a9fd85d319" FOREIGN KEY ("networkId") REFERENCES "network"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "block" DROP CONSTRAINT "FK_f1384f7eabd5047d1a9fd85d319"`);
        await queryRunner.query(`DROP TABLE "block"`);
        await queryRunner.query(`DROP TABLE "network"`);
    }

}
