import { NestFactory } from "@nestjs/core";
import { SeederModule } from "../seeders/seeder.module";
import { SeederService } from "../seeders/seeder.service";

async function bootstrap() {
  const seeder = await NestFactory.create(SeederModule);
  const seederService = seeder.get(SeederService);
  await seederService.seedNetworks();
}
bootstrap();
