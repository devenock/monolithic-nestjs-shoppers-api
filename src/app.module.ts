import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { AuthModule } from './modules/auth/auth.module';
import { User } from './modules/users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'pingshop',
      entities: [User],
      synchronize: true,
      // logging: true,
    }),
    ConfigModule.forRoot({
      // SPECIFY THE PATH
      envFilePath: '.env.development',
      // SET IT AS GLOBAL
      isGlobal: true,
    }),
    UsersModule,
    ProductsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
