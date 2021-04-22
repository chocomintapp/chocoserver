import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ApiAppModule } from "./app/api/app.module";
import { configService } from "./config/config.module";

async function bootstrap() {
  const apiApp = await NestFactory.create(ApiAppModule);
  if (!configService.isProduction) {
    const document = SwaggerModule.createDocument(
      apiApp,
      new DocumentBuilder().setTitle("Chocoserver API").setDescription("Chocoserver API").build()
    );
    SwaggerModule.setup("docs", apiApp, document);
  }
  apiApp.enableShutdownHooks();
  await apiApp.listen(configService.appPort);
}
bootstrap();
