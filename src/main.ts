import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig: AppConfigService = app.get('AppConfigService');

  if (!appConfig.isProduction) {
    const document = SwaggerModule.createDocument(
      app,
      new DocumentBuilder().setTitle('Chocoserver API').setDescription('Chocoserver API').build(),
    );
    SwaggerModule.setup('docs', app, document);
  }
  app.enableShutdownHooks();
  await app.listen(appConfig.port);
}
bootstrap();
