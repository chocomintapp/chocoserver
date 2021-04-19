import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { appConfigService } from "./common/config/app/config.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (!appConfigService.isProduction) {
    const document = SwaggerModule.createDocument(
      app,
      new DocumentBuilder().setTitle("Chocoserver API").setDescription("Chocoserver API").build()
    );
    SwaggerModule.setup("docs", app, document);
  }
  app.enableShutdownHooks();
  await app.listen(appConfigService.port);
}
bootstrap();
