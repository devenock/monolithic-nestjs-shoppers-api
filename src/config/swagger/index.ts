import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as SWAGGER_CONFIGS from '../constants/swagger.constants';

export function setupSwaggerDocs(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle(SWAGGER_CONFIGS.SWAGGER_TITLE)
    .setDescription(SWAGGER_CONFIGS.SWAGGER_API_DESCRIPTION)
    .setVersion(SWAGGER_CONFIGS.SWAGGER_API_VERSION)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER_CONFIGS.SWAGGER_API_ROOT, app, document);
}
