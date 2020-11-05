import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1604084770645 implements MigrationInterface {
    name = 'Migrations1604084770645'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "meal" ("id" SERIAL NOT NULL, "created_at" date NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(128) NOT NULL, "description" character varying NOT NULL, "mealTypes" text NOT NULL, "userId" uuid, CONSTRAINT "PK_ada510a5aba19e6bb500f8f7817" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ingredient_to_meal" ("id" SERIAL NOT NULL, "multiplier" numeric(5,1) NOT NULL, "ingredientId" integer, "mealId" integer, CONSTRAINT "PK_155bbce2fcee92b62722d99f0a5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "meal_to_food_day" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "time" character varying NOT NULL, "foodDayId" integer, CONSTRAINT "PK_4f2382ea58efa7b0d67a5b79ba6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ingredient_to_food_day_meal" ("id" SERIAL NOT NULL, "multiplier" numeric(5,1) NOT NULL, "ingredientId" integer, "mealToFoodDayId" integer, CONSTRAINT "PK_bc887c8a57f52c8f9456b1c26fa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ingredient" ("id" SERIAL NOT NULL, "created_at" date NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(24) NOT NULL, "kcal" numeric(5,1) NOT NULL, "carbs" numeric(5,1) NOT NULL, "protein" numeric(5,1) NOT NULL, "fat" numeric(5,1) NOT NULL, "price" numeric(5,1) NOT NULL, "sourceType" "ingredient_sourcetype_enum" NOT NULL, "countType" "ingredient_counttype_enum" NOT NULL, "userId" uuid, CONSTRAINT "PK_6f1e945604a0b59f56a57570e98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "measurement" ("id" SERIAL NOT NULL, "created_at" date NOT NULL DEFAULT now(), "weight" numeric(4,1) NOT NULL, "biceps" numeric(3,1) NOT NULL, "chest" numeric(4,1) NOT NULL, "thigh" numeric(3,1) NOT NULL, "calf" numeric(3,1) NOT NULL, "waist" numeric(4,1) NOT NULL, "userId" uuid, CONSTRAINT "PK_742ff3cc0dcbbd34533a9071dfd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying NOT NULL, "username" character varying(24) NOT NULL, "password" character varying(128) NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "food_day" ("id" SERIAL NOT NULL, "created_at" date NOT NULL DEFAULT now(), "name" character varying(128) NOT NULL, "userId" uuid, CONSTRAINT "PK_976d025cc4907d733462e87c7ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "meal" ADD CONSTRAINT "FK_419ad998c5e3b37a7cce0f872f5" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ingredient_to_meal" ADD CONSTRAINT "FK_4d9fec2bfe63fa0cb00e0ef1c9a" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ingredient_to_meal" ADD CONSTRAINT "FK_8ded32916715c44ec9eb150d09c" FOREIGN KEY ("mealId") REFERENCES "meal"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meal_to_food_day" ADD CONSTRAINT "FK_702c9ca563eb9d87c7fd14afb5d" FOREIGN KEY ("foodDayId") REFERENCES "food_day"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ingredient_to_food_day_meal" ADD CONSTRAINT "FK_6876852e1b40126cbc0c464cba2" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ingredient_to_food_day_meal" ADD CONSTRAINT "FK_b7e91cdb8eea77c3b1f3ec496ec" FOREIGN KEY ("mealToFoodDayId") REFERENCES "meal_to_food_day"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ingredient" ADD CONSTRAINT "FK_d621784b59b05016938180fb3bb" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "measurement" ADD CONSTRAINT "FK_e2c952d9d21c2899bfc69508300" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "food_day" ADD CONSTRAINT "FK_7a2fc9d298944012b8d1d58c371" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "food_day" DROP CONSTRAINT "FK_7a2fc9d298944012b8d1d58c371"`);
        await queryRunner.query(`ALTER TABLE "measurement" DROP CONSTRAINT "FK_e2c952d9d21c2899bfc69508300"`);
        await queryRunner.query(`ALTER TABLE "ingredient" DROP CONSTRAINT "FK_d621784b59b05016938180fb3bb"`);
        await queryRunner.query(`ALTER TABLE "ingredient_to_food_day_meal" DROP CONSTRAINT "FK_b7e91cdb8eea77c3b1f3ec496ec"`);
        await queryRunner.query(`ALTER TABLE "ingredient_to_food_day_meal" DROP CONSTRAINT "FK_6876852e1b40126cbc0c464cba2"`);
        await queryRunner.query(`ALTER TABLE "meal_to_food_day" DROP CONSTRAINT "FK_702c9ca563eb9d87c7fd14afb5d"`);
        await queryRunner.query(`ALTER TABLE "ingredient_to_meal" DROP CONSTRAINT "FK_8ded32916715c44ec9eb150d09c"`);
        await queryRunner.query(`ALTER TABLE "ingredient_to_meal" DROP CONSTRAINT "FK_4d9fec2bfe63fa0cb00e0ef1c9a"`);
        await queryRunner.query(`ALTER TABLE "meal" DROP CONSTRAINT "FK_419ad998c5e3b37a7cce0f872f5"`);
        await queryRunner.query(`DROP TABLE "food_day"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "measurement"`);
        await queryRunner.query(`DROP TABLE "ingredient"`);
        await queryRunner.query(`DROP TABLE "ingredient_to_food_day_meal"`);
        await queryRunner.query(`DROP TABLE "meal_to_food_day"`);
        await queryRunner.query(`DROP TABLE "ingredient_to_meal"`);
        await queryRunner.query(`DROP TABLE "meal"`);
    }

}
