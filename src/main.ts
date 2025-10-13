import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwaggerDocs } from './config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger config invokation
  setupSwaggerDocs(app);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
