import { NestFactory } from "@nestjs/core";
import { SeederModule } from "../seeders/seeder.module";
import { SeederService } from "../seeders/seeder.service";

async function bootstrap() {
  const seeder = await NestFactory.create(SeederModule);
  const seederService = seeder.get(SeederService);

  const test = seeder.get(SeederModule);
  console.log(test);
  // NestFactory.createApplicationContext(SeederModule)
  //   .then((appContext) => {
  //     const logger = appContext.get(Logger);
  //     const seeder = appContext.get(Seeder);
  //     seeder
  //       .seed()
  //       .then(() => {
  //         logger.debug("Seeding complete!");
  //       })
  //       .catch((error) => {
  //         logger.error("Seeding failed!");
  //         throw error;
  //       })
  //       .finally(() => appContext.close());
  //   })
  //   .catch((error) => {
  //     throw error;
  //   });
}
bootstrap();
