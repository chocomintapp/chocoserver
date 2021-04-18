import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1618720994578 implements MigrationInterface {
  name = 'init1618720994578';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "network" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "chainId" character varying NOT NULL, CONSTRAINT "PK_8f8264c2d37cbbd8282ee9a3c97" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "contract" ("id" SERIAL NOT NULL, "address" character varying NOT NULL, "name" character varying NOT NULL, "symbol" character varying NOT NULL, "isERC721" boolean NOT NULL, "networkId" integer, CONSTRAINT "PK_17c3a89f58a2997276084e706e8" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "event" ("id" SERIAL NOT NULL, "index" integer NOT NULL, "topics" text array NOT NULL, "data" character varying NOT NULL, "transactionId" integer, "contractId" integer, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "transaction" ("id" SERIAL NOT NULL, "hash" character varying(66) NOT NULL, "index" integer NOT NULL, "timestamp" integer NOT NULL, "blockId" integer, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "block" ("id" SERIAL NOT NULL, "number" integer NOT NULL, "networkId" integer, CONSTRAINT "PK_d0925763efb591c2e2ffb267572" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "token" ("id" SERIAL NOT NULL, "tokenId" character varying NOT NULL, "contractId" integer, CONSTRAINT "PK_82fae97f905930df5d62a702fc9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "metadata" ("id" SERIAL NOT NULL, "image" character varying NOT NULL, "image_data" character varying NOT NULL, "external_url" character varying NOT NULL, "description" character varying NOT NULL, "name" character varying NOT NULL, "attributes" character varying NOT NULL, "background_color" character varying NOT NULL, "animation_url" character varying NOT NULL, "youtube_url" character varying NOT NULL, CONSTRAINT "PK_56b22355e89941b9792c04ab176" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "contract" ADD CONSTRAINT "FK_b8ee4adea6e3668809e6757dc93" FOREIGN KEY ("networkId") REFERENCES "network"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "event" ADD CONSTRAINT "FK_de352fe374e828e819df9bd8248" FOREIGN KEY ("transactionId") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "event" ADD CONSTRAINT "FK_38e80762d9d4fb420b298939edc" FOREIGN KEY ("contractId") REFERENCES "contract"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "transaction" ADD CONSTRAINT "FK_ac3a4377dd117a7cf615cde7b63" FOREIGN KEY ("blockId") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "block" ADD CONSTRAINT "FK_f1384f7eabd5047d1a9fd85d319" FOREIGN KEY ("networkId") REFERENCES "network"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "token" ADD CONSTRAINT "FK_e1e0bb89232fd29baf8e3459c0d" FOREIGN KEY ("contractId") REFERENCES "contract"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "token" DROP CONSTRAINT "FK_e1e0bb89232fd29baf8e3459c0d"`);
    await queryRunner.query(`ALTER TABLE "block" DROP CONSTRAINT "FK_f1384f7eabd5047d1a9fd85d319"`);
    await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_ac3a4377dd117a7cf615cde7b63"`);
    await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_38e80762d9d4fb420b298939edc"`);
    await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_de352fe374e828e819df9bd8248"`);
    await queryRunner.query(`ALTER TABLE "contract" DROP CONSTRAINT "FK_b8ee4adea6e3668809e6757dc93"`);
    await queryRunner.query(`DROP TABLE "metadata"`);
    await queryRunner.query(`DROP TABLE "token"`);
    await queryRunner.query(`DROP TABLE "block"`);
    await queryRunner.query(`DROP TABLE "transaction"`);
    await queryRunner.query(`DROP TABLE "event"`);
    await queryRunner.query(`DROP TABLE "contract"`);
    await queryRunner.query(`DROP TABLE "network"`);
  }
}
