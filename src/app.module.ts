import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { AuthModule } from './modules/auth/auth.module';
import { User } from './modules/users/user.entity';
import * as redisStore from 'cache-manager-redis-store';

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
    // CACHING
    // we can use different stores like redis, memory, etc
    // here we are using memory store
    // CacheModule.register({
    //   isGlobal: true, // Make the cache module global
    //   store: ['memory'], // Use in-memory caching
    //   ttl: 5, // Default time-to-live (seconds)
    //   max: 10, // Maximum number of items in cache
    // }),
    // using REDIS as cache store
    CacheModule.register({
      isGlobal: true, 
      store: redisStore,
      host: 'redis',
      port: 6379,
    }), 
    // MODULES
    UsersModule,
    ProductsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
